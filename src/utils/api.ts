import * as request from "superagent";
import { getToken, unauthorizedRedirect } from "./helper";
const baseURl = "http://localhost:3001";

export const login = () =>
  request
    .post(`${baseURl}/login`)
    .send({
      username: "azam",
      password: "azam",
    })
    .then((response) => {
      console.log(response);
      return response.body;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

export const authenticate = (token) =>
  request
    .post(`${baseURl}/authenticate`)
    .set("Authorization", `Bearer ${token}`)
    .use(unauthorizedRedirect)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
