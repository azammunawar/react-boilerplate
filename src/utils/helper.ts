import { SessionStore } from "store/session.store";
import { Request, Response } from "superagent";

export const setUser = (user: user) => {
  localStorage.setItem("name", user.name);
  localStorage.setItem("email", user.email);
  localStorage.setItem("token", user.token);
};

export const getToken = () => localStorage.getItem("token") || "";

export const getUser = () => {
  const name = localStorage.getItem("name") || "";
  const email = getToken();
  const token = localStorage.getItem("token") || "";
  return { name, email, token };
};

export const removeUser = () => {
  localStorage.clear();
};
let session: SessionStore;
export const setSession = (SessionStore) => {
  session = SessionStore;
};
export function unauthorizedRedirect(req: Request) {
  req.on("response", (res: Response) => {
    if (res.unauthorized) {
      session.logout();
    }
  });
}

export function authentication(req: Request) {
  return req.use(unauthorizedRedirect).set("Authorization", getToken());
}
