# Resume Generator

Write resume with toml, style it with css and generate pdf with puppeteer.

## Usage

**Click `Use this template` button to create your own repo.**

You could simply edit it on github, merge it back and wait for ci to generate it for you, you can find generated PDF in `resume` branch.

Or if you want to preview and generate PDF in you local machine, you will have to clone it first.

Make sure you have NodeJS Environment ready and install dependencies by running `yarn`.

Edit toml file in `content` directory. Run `yarn start` and open `localhost:3000` with your browser for preview, you could right click on webpage, click print and choose save it as PDF manually.

Run `yarn pdf:local` to generate PDF in a single command.

**When runnning on your local machine, it installs `puppeteer-core` which only uses your installed chrome so you dont't have to download a whole new chrome again, you might have to specify the chrome executable path in the `scripts/pdf-local.mjs` script if the path is not in the default location.**

currently the script only have windows and macOS supported with default path in:

- Windows: `C:\\Program Files\\Google\\Chrome\\Application\\chrome`
- macOS: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

## Theme

Currently there is only one `simple` theme supported, you can preview it by checking `resume` branch.
