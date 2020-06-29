describe('sample test', () => {
  it('should true be truthy', () => {
    browser.url('/');
    browser.pause(1000)
    expect(browser.getTitle()).includes('Google');
  });
});
