declare module "*.jpg";

interface routes {
  path: string;
  component: any;
  exact: boolean;
  isPublic: boolean;
}

interface user {
  name: string;
  email: string;
  token: string;
}

interface User {
  name: string;
  email: string;
}
