import React from "react";
import { UserDetail } from "./user-detail.component";
import { useParams } from "react-router-dom";
import { orgContext } from "core/organisation.context";
import { getCompany, getMember } from "./api/api";
import { mapMember, mapCompany } from "./detail-mappers";

import { getCompany_Mock, getMember_Mock } from "./api/api";

export const UserDetailContainer: React.FC = () => {
  const { id } = useParams();
  const { org } = React.useContext(orgContext);

  const [member, setMember] = React.useState(null);
  const [company, setCompany] = React.useState(null);

  React.useEffect(() => {
    getMember(id).then(mapMember).then(setMember);
  }, [id]);

  React.useEffect(() => {
    getCompany(org).then(mapCompany).then(setCompany);
  }, [org]);

  //MOCK DATA 
  /* React.useEffect(() => {
    getMember_Mock().then(mapMember).then(setMember);
  }, []);

  React.useEffect(() => {
    getCompany_Mock().then(mapCompany).then(setCompany);
  }, []); */

  return (
    <>{member && company && <UserDetail member={member} company={company} />}</>
  );
};
