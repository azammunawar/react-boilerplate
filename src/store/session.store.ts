import { action, makeAutoObservable } from "mobx";
import { getToken, getUser, removeUser, setUser } from "utils/helper";
import { login, authenticate } from "utils/api";

export class SessionStore {
  constructor() {
    makeAutoObservable(this);
  }

  user: undefined | user = undefined;

  login = () =>
    login().then(
      action("fetchSuccess", (res) => {
        setUser(res.data);
        this.user = res.data;
      })
    );

  logout = () => {
    this.user = undefined;
    removeUser();
  };

  get isUser() {
    return this.user !== undefined;
  }

  readonly authenticationAttempt = (async () => {
    const storedToken = getToken();
    const user = getUser();
    if (storedToken) {
      authenticate(storedToken).then(
        action("fetchSucces", () => {
          this.user = user;
        })
      );
    }
  })();
}
