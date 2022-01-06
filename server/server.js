import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import compression from "compression";
import cors from "cors";
import { JssProvider, SheetsRegistry, createGenerateId } from "react-jss";
// import Layout from "../src/components/layout";

class MyComponent extends React.Component {
  render() {
    return (
      <p>
        In order to run react-mobx-ssr-starter follow these steps: clone
        repository git clone
        https://github.com/Nazar32/react-mobx-ssr-starter.git cd into directory
        cd react-mobx-ssr-starter install packages npm i build client npm run
        build:client build server npm run build:server start dev server npm
        start open localhost:3000 in browser
      </p>
    );
  }
}
export class login extends React.Component {
  render() {
    return <p>login</p>;
  }
}

const app = express();
app.use(compression());

app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.json());
app.post("/login", function (req, res) {
  console.log("req", req.body);
  if (req.body.username === "azam" && req.body.password === "azam") {
    res.status(200).send({
      status: 200,
      data: {
        name: "azam",
        email: "azi.munawarali@gmail.com",
        token: "UbpN3vSsWtQehzs70VCcAcyNMkTyoan",
      },
    });
  } else {
    res.status(401).send({ status: 401, data: "authentication Failed!" });
  }
});

app.post("/authenticate", function (req, res) {
  console.log("req", req.headers);
  if (req.headers.authorization === "Bearer UbpN3vSsWtQehzs70VCcAcyNMkTyoan") {
    res.status(200).send("user is authenticated");
  }
  res.status(401).send("Authentication Failed");
});

app.use("/login", (req, res, next) => {
  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("some error happened");
    }
    return res.send(
      data.replace(
        `<div id="app"></div>`,
        `<div id="app">${ReactDOMServer.renderToString(<login />)}</div>`
      )
    );
  });
});

const sheets = new SheetsRegistry();
const generateId = createGenerateId();
// const body = ReactDOMServer.renderToString(
//   <JssProvider registry={sheets} generateId={generateId}>
//     <Layout />
//   </JssProvider>
// );
// app.use("*", (req, res, next) => {
//   fs.readFile(path.resolve("../dist/index.html"), "utf-8", (err, data) => {
//     if (err) {
//       return res.status(500).send("some error happened");
//     }

//     return res.send(
//       data.replace(`<div id="app"></div>`, `<div id="app">${body}</div>`)
//     );
//   });
// });

app.listen(3001, () => {
  console.log("runing on 3001");
});
