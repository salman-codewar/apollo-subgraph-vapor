import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema, printSubgraphSchema } from "@apollo/subgraph";
import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper";
import { GraphQLScalarType } from "graphql";
import { DateTimeResolver } from "graphql-scalars";
import gql from "graphql-tag";
import * as tq from "type-graphql";
import { Context, context } from "./context";
import { logger } from "./logger";
import resolvers from "./resolvers";

const app = async () => {
  const ts = await tq.buildSchema({
    resolvers: resolvers,
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
    validate: { forbidUnknownValues: false },
  });

  const federatedSchema = buildSubgraphSchema({
    typeDefs: gql(printSubgraphSchema(ts)),
    resolvers: tq.createResolversMap(ts) as GraphQLResolverMap<unknown>,
  });

  const server = new ApolloServer<Context>({ schema: federatedSchema });

  const { url } = await startStandaloneServer(server, {
    context: async () => context,
  });

  logger.info(`🚀 Apollo Subgraph Vapor is ready at: ${url}`);
};

app();
