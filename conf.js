exports.config = {
  framework: 'jasmine',
  directConnect:true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function(){
    var url = 'http://www.despegar.com.ar/cp/shop/search/C982/C31684/2017-09-12/2017-09-15/2/0/0/NA/2017-09-12/2017-09-15/2';
    browser.get(url);
  }
};
