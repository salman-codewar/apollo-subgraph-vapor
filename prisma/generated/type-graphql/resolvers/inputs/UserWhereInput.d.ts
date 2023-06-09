import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserWhereInput {
  AND?: UserWhereInput[] | undefined;
  OR?: UserWhereInput[] | undefined;
  NOT?: UserWhereInput[] | undefined;
  id?: IntFilter | undefined;
  name?: StringFilter | undefined;
  email?: StringFilter | undefined;
  password?: StringFilter | undefined;
}
