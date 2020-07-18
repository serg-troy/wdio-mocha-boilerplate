export default class BasePage {
  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}
