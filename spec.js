describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://www.despegar.com.ar/paquetes');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
