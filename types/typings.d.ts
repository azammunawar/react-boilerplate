interface routes {
  path: string;
  component: any;
  exact: boolean;
  isPublic?: boolean;
}

interface User {
  name: string;
  email: string;
}
