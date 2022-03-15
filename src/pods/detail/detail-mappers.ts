import * as api from "./api/api.model";
import * as vm from "./api-detail.vm";

export const mapMember = (member: api.Member): vm.Member => ({
  gitHub: member.html_url,
  name: member.name,
  id: member.id.toString(),
  login: member.login,
  avatar_url: member.avatar_url,
  blog: member.blog,
  location: member.location
});

export const mapCompany = (company: api.Company): vm.Company => ({
  name: company.name,
  id: company.id,
  location: company.location,
  blog: company.blog,
  gitHub: company.html_url,
  email: company.email,
  publicRepos: company.public_repos,
});
