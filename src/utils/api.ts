import * as request from "superagent";
import { unauthorizedRedirect } from "./helper";
const baseURl = "http://localhost:3001";

export const login = () =>
  request
    .post(`${baseURl}/login`)
    .send({
      username: "azam",
      password: "azam",
    })
    .then((response) => {
      return response.body;
    })
    .catch((error) => {
      return error;
    });

export const authenticate = (token) =>
  request
    .post(`${baseURl}/authenticate`)
    .set("Authorization", `Bearer ${token}`)
    .use(unauthorizedRedirect)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
