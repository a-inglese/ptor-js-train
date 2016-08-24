describe('Protractor Demo App', function() {

  it('should have a title', function() {
    browser.get('http://www.despegar.com.ar/actividades/shopping#!/search/BUE');
    expect(browser.getTitle()).toEqual('Actividades y Atracciones en Buenos Aires | Despegar.com');
  });

  it('Should be able to count', function() {
    var items = element.all(by.repeater('item in search.items'));
    expect(items.count()).not.toBeLessThan(0);
  });

  it('Should to get the first element', function() {
    var items = element.all(by.repeater('item in search.items'));
    items.first().getText().then(function(text){
      console.log(text);
    });
    expect(items.count()).not.toBeLessThan(0);
  });

  it("Should be able to filter", function () {
    var items = element.all(by.repeater('item in search.items'));
    var filter = element(by.model('search.keywords'));
    filter.sendKeys('Esenciales');
    filter.sendKeys(protractor.Key.ENTER);
    expect(items.count()).toEqual(1);
  });
});
