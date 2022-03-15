import { Member } from "./api.model";

export const getMembers = (organisation): Promise<Member[]> =>
  fetch(`https://api.github.com/orgs/${organisation}/members`).then(
    (response) => response.json()
  );


