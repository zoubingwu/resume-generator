import os from "os";
import puppeteer from "puppeteer-core";

import pdf from "./pdf.mjs";

const platform = os.platform();
let chromeExecutablePath;

if (platform === "win32") {
  chromeExecutablePath =
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome";
} else if (platform === "darwin") {
  chromeExecutablePath =
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
}

console.log("Starting browser...");
const browser = await puppeteer.launch({
  executablePath: chromeExecutablePath,
  headless: true,
});

await pdf(browser, false);

process.exit(0);
