'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat App', function() {
  
  beforeEach(function() {
    browser.get('index.html');
  });
  
  it('should filter the phone list as a user types into the search box', function() {
    var phoneList = element.all(by.repeater('phone in vm.phones'));
    var query = element(by.model('vm.query'))    
    
    expect(phoneList.count()).toBe(20);
    
    query.sendKeys('dell');
    expect(phoneList.count()).toBe(2);    
    
    for(var i=0;i<10;i++) {
      query.clear();
      query.sendKeys('samsung');
      expect(phoneList.count()).toBe(5);
    }
  })
  
});
