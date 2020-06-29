describe('SAMPLE', () => {
  it('sample', () => {
    browser.url('/');
    browser.pause(1000);
    expect(browser.getTitle()).includes('Google');
  });
});
