import { makeAutoObservable, set } from "mobx";

export class SessionStore {
  constructor() {
    makeAutoObservable(this);
  }

  isUser = false;

  login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.updateUser();
        resolve("user added");
      }, 500);
    });
  };

  updateUser = () => {
    this.isUser = !this.isUser;
  };
}
