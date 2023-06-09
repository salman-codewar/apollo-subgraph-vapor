import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
  id?: IntWithAggregatesFilter | undefined;
  name?: StringWithAggregatesFilter | undefined;
  email?: StringWithAggregatesFilter | undefined;
  password?: StringWithAggregatesFilter | undefined;
}
