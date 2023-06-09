import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User, UserCreateInput } from "../../prisma/generated/type-graphql";
import { Context } from "../context";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users(@Ctx() ctx: Context): Promise<User[]> {
    return ctx.prisma.user.findMany();
  }

  @Query(() => User)
  async user(@Arg("id") id: number, @Ctx() ctx: Context): Promise<User> {
    return ctx.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  @Mutation(() => User)
  async createUser(
    @Arg("data") data: UserCreateInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return await ctx.prisma.user.create({
      data: {
        ...data,
      },
    });
  }
}
