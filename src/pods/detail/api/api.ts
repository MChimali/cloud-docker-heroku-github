import { Member } from "./api.model";
import { Company } from "./api.model";

import { company, member } from "./mock.model";

export const getMember = (member: string): Promise<Member> =>
  fetch(`https://api.github.com/user/${member}`).then((response) =>
    response.json()
  );

export const getCompany = (company: string): Promise<Company> =>
  fetch(`https://api.github.com/orgs/${company}`).then((response) =>
    response.json()
  );

export const getCompany_Mock = (): Promise<Company> => Promise.resolve(company);

export const getMember_Mock = (): Promise<Member> => Promise.resolve(member);
