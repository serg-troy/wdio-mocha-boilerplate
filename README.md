# Webdriver IO Template
### **To run tests:**
* Clone repository
* Run `npm install`
* Run `npm test`

### **WebDriverIO project setup from scratch:**
1. Create new NodeJS project (or run `npm init` inside existing directory)
2. Run `npm i --save-dev @wdio/cli`
3. Run `npx wdio config -y`
4. Run `mkdir -p ./test/specs & mkdir -p ./test/pages`
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
  ui: 'bdd',
  compilers: ['js:@babel/register'],
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
7. To run your tests use `npx wdio wdio.conf.js`

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
```javascript
    "report": "allure generate allure-results --clean && allure open",
```
  

