# Webdriver IO v6 Template
### **To run tests:**
* Clone repository
* Run `npm install`
* Run `npm test`

### **WebDriverIO v6 project setup from scratch:**
1. Create a directory for your project `mkdir project-name && cd project-name`
2. Run `npm init`
3. Run `npm i --save-dev @wdio/cli`
4. Run `npx wdio config -y` to configure WebdriverIO with default settings, or run `npx wdio config` to configure manually:
```shell script
? Where is your automation backend located? (Use arrow keys)
❯ On my local machine 
  In the cloud using Experitest 
  In the cloud using Sauce Labs 
  In the cloud using Browserstack or Testingbot or LambdaTest or a different service 
  I have my own Selenium cloud 
```
```shell script
? Which framework do you want to use? (Use arrow keys)
❯ mocha 
  jasmine 
  cucumber 
```
```shell script
? Do you want to run WebdriverIO commands synchronous or asynchronous? (Use arrow keys)
❯ sync 
  async 
```
```shell script
? Where are your test specs located? (./test/specs/**/*.js) 
```
```shell script
? Do you want WebdriverIO to autogenerate some test files? (Y/n)
```
```shell script
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? (Y/n) 
```
```shell script
? Where are your page objects located? (./test/pageobjects/**/*.js) 
```
```shell script
? Are you using a compiler? (Use arrow keys)
❯ Babel (https://babeljs.io/) 
  TypeScript (https://www.typescriptlang.org/) 
  No! 
```
```shell script
? Which reporter do you want to use? 
 ◉ spec
 ◯ dot
 ◯ junit
❯◉ allure
 ◯ sumologic
 ◯ concise
 ◯ reportportal
```
```shell script
? Do you want to add a service to your test setup? 
 ◉ chromedriver
 ◯ sauce
 ◯ testingbot
❯◯ selenium-standalone
 ◯ devtools
 ◯ applitools
 ◯ browserstack
```
```shell script
? What is the base url? ('specify your project base url')
```
5. Babel setup: 
* create _babel.config.js_ and copy/paste following code:
```javascript
 module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}
```
* Run `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`
* In _wdio.conf.js_ add _babel_ to compilers:
```javascript
mochaOpts: {
  require: ['@babel/register'],
  ui: 'bdd',
  timeout: 60000
},
```
6. Prettier setup:
* Run `npm install --save-dev prettier`
* Create `prettier.config.js` and copy/paste following code:
```javascript
module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  parser: 'babel',
  printWidth: 100,
};
```
7. Add _Chai Assertions_ to your project (or stick with Jest):
* Run `npm install --save-dev chai`
* Setup _chai_ in beforeTest function (so you won't have to import it everytime).
Replace `beforeTest` function in wdio.conf js with following:
```javascript
  beforeTest: function () {
    const chai = require('chai');
    global.expect = chai.expect;
  },
```

8. To run your tests use `npx wdio wdio.conf.js`

### **Add Allure Reporter to existing WDIO framework:**
1. Install Allure Reporter `npm install @wdio/allure-reporter --save-dev`
2. Add Allure to reporters in _wdio.conf.js_ file:
```javascript
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: true,
  }]],
```
3. Install CLI for Allure `npm install allure-commandline --save-dev`
4. Add _report script_ to your _package.json_ file
```json
    "report": "allure generate allure-results --clean && allure open",
```
  

