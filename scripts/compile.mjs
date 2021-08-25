import fs from "fs";
import hbs from "handlebars";
import toml from "@iarna/toml";
import path from "path";

fs.readdirSync("./views/partials").forEach((file) => {
  const ext = path.extname(file);
  if (ext === ".hbs") {
    hbs.registerPartial(
      file.replace(ext, ""),
      fs.readFileSync(`./views/partials/${file}`, "utf-8")
    );
  }
});
const layout = fs.readFileSync("./views/layouts/main.hbs", "utf-8");
const template = fs.readFileSync("./views/simple.hbs", "utf8");

const zh = toml.parse(fs.readFileSync("./content/zh.toml", "utf-8"));
const en = toml.parse(fs.readFileSync("./content/en.toml", "utf-8"));

const compiled = hbs.compile(template);

const htmlZh = compiled(zh);
fs.writeFileSync("zh.html", hbs.compile(layout)({ body: htmlZh, en: false }));

const htmlEn = compiled(en);
fs.writeFileSync("en.html", hbs.compile(layout)({ body: htmlEn, en: true }));

process.exit(0);
