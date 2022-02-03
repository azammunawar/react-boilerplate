import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import compression from "compression";
import cors from "cors";
// import { JssProvider, SheetsRegistry, createGenerateId } from "react-jss";

const app = express();
app.use(compression());

app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.json());
app.post("/login", function (req, res) {
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
  if (req.headers.authorization === "Bearer UbpN3vSsWtQehzs70VCcAcyNMkTyoan") {
    res.status(200).send("user is authenticated");
  }
  res.status(401).send("Authentication Failed");
});

app.use("/login", (req, res) => {
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

// const sheets = new SheetsRegistry();
// const generateId = createGenerateId();
// const body = ReactDOMServer.renderToString(
//   <JssProvider registry={sheets} generateId={generateId}>
//     <Layout />
//   </JssProvider>
// );
app.use("*", (req, res) => {
  fs.readFile(path.resolve("../dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("some error happened");
    }

    return res.send(
      data.replace(`<div id="app"></div>`, `<div id="app">${body}</div>`)
    );
  });
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("runing on 3001");
});
