import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  login: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  login: "/login",
  list: "/list",
  detail: "/detail/:id",
};

interface LinkRoutes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  detail: (id: string) =>
    generatePath(switchRoutes.detail, { id: id.toString() }),
};
