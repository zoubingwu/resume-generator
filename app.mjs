import fs from "fs";
import express from "express";
import hbs from "express-handlebars";
import toml from "@iarna/toml";

const app = express();

app.engine("hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  const resume = toml.parse(fs.readFileSync("./content/zh.toml", "utf-8"));
  res.render("simple", { ...resume, en: false });
});

app.get("/en", function (req, res) {
  const resume = toml.parse(fs.readFileSync("./content/en.toml", "utf-8"));
  res.render("simple", { ...resume, en: true });
});

const port = 3000;
app.listen(port);
console.log(`Server started at: http://localhost:${port}`);
