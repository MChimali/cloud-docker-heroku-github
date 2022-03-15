import { users } from "../../../core";
import { User } from "./api.model";

export const getUsersCredentials = (): Promise<User[]> =>
  Promise.resolve(users);
