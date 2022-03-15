import * as apiModel from "./api/api.model";
import * as viewModel from "./user-list.vm";

export const userListMapper = (list: apiModel.Member[]): viewModel.Member[] =>
  list.map(userMapper);

const userMapper = (user: apiModel.Member): viewModel.Member => ({
  id: user.id.toString(),
  login: user.login,
  avatar_url: user.avatar_url,
});


