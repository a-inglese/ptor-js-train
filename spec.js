
describe('Protractor Demo App pass', function() {

  it('should be able to see the first cluster', function() {
    var clusters = element.all(by.repeater('package in searchCtrl.packages.data.items'));
     clusters.then(function(){
       expect(clusters.first().isDisplayed()).toBe(true);
     });
  });

});
