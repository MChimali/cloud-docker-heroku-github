import React from "react";
import { Member, Company } from "./api-detail.vm";
import { UserDetailHeader } from "./components/detail-header.component";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { useStyles } from "./style.component";
import { NavElement } from "./components/nav-component";
import { LiElement, LiLinkElement } from "./components/list.element";

interface Props {
  member: Member;
  company: Company;
}

export const UserDetail: React.FC<Props> = (props) => {
  const { member, company } = props;
  const [openMember, setOpenMember] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);

  const propsStyles = {
    avatar: member.avatar_url,
  };

  const classes = useStyles(propsStyles);
  return (
    <>
      <UserDetailHeader memberName={member.name} companyName={company.name} />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <div className={classes.collapse}>
          <NavElement
            item={member}
            collapseState={openMember}
            setCollapseState={setOpenMember}
          />
          <Collapse in={openMember} timeout="auto" unmountOnExit>
            <div className={classes.flexParent}>
              <div className={classes.image}>&nbsp;</div>
              <ul className={classes.list}>
                <LiElement string="Id : " item={member.id} />
                <LiLinkElement
                  string="Repositorios en GitHub: "
                  item={member.gitHub}
                />
                <LiElement string="Login : " item={member.login} />
              </ul>
            </div>
            <ul className={classes.list}>
              <LiElement string="Location :" item={member.location} />
              <LiElement string="Location :" item={member.location} />
              <LiLinkElement string="Blog o website: " item={member.blog} />
            </ul>
          </Collapse>
        </div>
        <div className={classes.collapse}>
          <NavElement
            item={company}
            collapseState={openCompany}
            setCollapseState={setOpenCompany}
          />
          <Collapse in={openCompany} timeout="auto" unmountOnExit>
            <ul className={classes.list}>
              <LiElement string="Id :" item={company.id.toString()} />
              <LiLinkElement
                string=" Blog o website de la compañía: "
                item={company.blog}
              />
            </ul>
          </Collapse>
        </div>
      </List>
    </>
  );
};
