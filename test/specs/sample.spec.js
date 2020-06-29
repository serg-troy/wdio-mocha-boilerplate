import Page from "../pages/Page";

describe('SAMPLE', () => {
  it('sample', () => {
    Page.open();
    browser.pause(1000)
    expect(browser.getTitle()).includes('Google');
  });
});
