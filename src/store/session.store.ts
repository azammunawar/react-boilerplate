import { action, observable, computed } from "mobx";

export class SessionStore {
  constructor() {}
  private variableName = "";

  /******************************************************************************
   *                                OBSERVABLES
   *****************************************************************************/
  @observable public isUser = false;

  /******************************************************************************
   *                                PRIVATE OPERATORS
   *****************************************************************************/
  login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.updateUser();
        resolve("user added");
      }, 500);
    });
  };

  /******************************************************************************
   *                           MOBX ASYNC TASKS
   *****************************************************************************/
  // Fetch list of Sites from backend services

  /******************************************************************************
   *                                ACTIONS
   *****************************************************************************/
  @action
  public updateUser = () => {
    this.isUser = true;
  };
  // Set the selected site (Site)

  /******************************************************************************
   *                           COMPUTED PROPERTIES
   *****************************************************************************/
  // Returns Top Labels for Summary Content
}
