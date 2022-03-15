import React from "react";
import { Member } from "../user-list.vm";
import { TableRow, TableCell } from "@material-ui/core";
import { useStyles } from "../user-list.styles";

interface Props {
  member: Member;
  handleNavigate: (id: string) => void;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member, handleNavigate } = props;
  const classes = useStyles();

  return (
    <TableRow
      className={classes.link}
      key={member.id}
      onClick={() => handleNavigate(member.id)}
    >
      <TableCell align="left">
        <img src={member.avatar_url} style={{ width: "5rem" }} />
      </TableCell>
      <TableCell align="center">{member.id}</TableCell>
      <TableCell align="center"> {member.login}</TableCell>
    </TableRow>
  );
};