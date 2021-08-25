import puppeteer from "puppeteer";

import pdf from "./pdf.mjs";

console.log("Starting browser...");
const browser = await puppeteer.launch();

await pdf(browser, true);

process.exit(0);
