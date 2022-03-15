export interface Member {
    gitHub: string;
    name: string;
    id: string;
    login: string;
    avatar_url: string;
    location:string;
    blog: string;
  }
  
  export interface Company {
    name: string;
    id: number;
    location: string;
    blog: string;
    gitHub: string;
    email: string;
    publicRepos: number;
  }