import React from "react";
import { UserList } from "./user-list.component";
import { Member } from "./user-list.vm";
import { getMembers } from "./api/api";
import { userListMapper } from "./user-list.mapper";
import { orgContext } from "../../core/organisation.context";

interface Props {
  handleNavigate: (id: string) => void;
}

export const UserListContainer: React.FC<Props> = (props) => {
  const { handleNavigate } = props;
  const [userList, setUserList] = React.useState<Member[]>([]);
  const { org } = React.useContext(orgContext);

  React.useEffect(() => {
    getMembers(org).then(userListMapper).then(setUserList);
  }, [org]);

  return (
    <>
      {userList && <UserList list={userList} handleNavigate={handleNavigate} />}
    </>
  );
};
