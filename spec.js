describe('Protractor Demo App pass', function() {
  it('should have a title', function() {
    browser.get('http://kangaroom.net/');
    //expect(browser.getTitle()).toEqual("Flatshares, roommates, house shares and rooms to rent | Kangaroom");
  });
});

//describe('Protractor Demo App Fail', function() {
//  it('should have a title', function() {
//    browser.get('http://www.despegar.com.ar/cp/shop/search/C982/C31684/2016-08-26/2016-09-02/2/0/0/NA/2016-08-26/2016-09-02/2');
//    expect(browser.getTitle()).toEqual('Paquetes Turisticos, reserva tu Paquete ahora | Despegar.com');
//  });
//});
