import { exec } from "child_process";
import mkdirp from "mkdirp";

export default async function pdf(browser, isCI) {
  console.log("Starting server...");
  const server = exec("node app.mjs");
  const page = await browser.newPage();

  const zhPage = isCI
    ? `file://${process.cwd()}/zh.html`
    : "http://localhost:3000/";
  console.log("zhPage: ", zhPage);
  const enPage = isCI
    ? `file://${process.cwd()}/en.html`
    : "http://localhost:3000/en";
  console.log("enPage: ", enPage);

  console.log("Go to resume page...");
  await page.goto(zhPage, {
    waitUntil: "networkidle0",
  });

  try {
    // make sure resume dir exists
    await mkdirp("./resume");
  } catch (e) {}

  console.log("Generating pdf for resume zh...");
  await page.pdf({ path: "./resume/resume-zh.pdf", format: "a4" });

  console.log("Go to resume page...");
  await page.goto(enPage, {
    waitUntil: "networkidle0",
  });

  console.log("Generating pdf for resume en...");
  await page.pdf({ path: "./resume/resume-en.pdf", format: "a4" });

  console.log("Closing server...");
  const killed = server.kill();
  if (!killed) {
    console.log("Close server failed.");
  }

  console.log("Closing browser...");
  await browser.close();

  console.log("done!");
}
