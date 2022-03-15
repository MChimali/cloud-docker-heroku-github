import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Member } from "./user-list.vm";
import { orgContext } from "../../core/organisation.context";
import { useDebounced } from "./components/useDebounce.hook";
import { MemberRow } from "./components/member-row";
import { UserListHeader } from "./components/user-list-header.component";

import {
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import { useStyles } from "./user-list.styles";

interface Props {
  list: Member[];
  handleNavigate: (id: string) => void;
}

export const UserList: React.FC<Props> = (props) => {
  const { list, handleNavigate } = props;
  const { org, setOrg } = React.useContext(orgContext);
  
  const [debOrg, setDebOrg] = useDebounced(org, setOrg, 10000);
  const classes = useStyles();

  return (
    <>
      <UserListHeader org={debOrg} setOrg={setOrg} setDebOrg={setDebOrg} />
      <TableContainer>
        <Table className="table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list &&
              list.map((member) => (
                <MemberRow
                  member={member}
                  key={member.id}
                  handleNavigate={handleNavigate}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
