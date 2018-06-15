describe('PhoneListController', function() {
    
    beforeEach(module('phoneList'));

    beforeEach(inject(function($rootScope, $componentController){
        rootScope = $rootScope.$new();
        controller = $componentController('phoneList', {$rootScope: rootScope});
    }));
    
    it('should works', inject(function(){
        spyOn(rootScope, '$broadcast');
        controller.viewDetails(12);
        expect(rootScope.$broadcast).toHaveBeenCalledWith('clickedPhone',12);
    }))
    
    it('should works', inject(function($componentController){
        mockedService = {
            getPhones: function() {
                return new Promise(function(resolve, reject) {
                    setTimeout(resolve, 100, 'foo');
                })
            },
            getPhoneDetails: function(phoneId) {
                return phoneId;
            }
        }
        controller = $componentController('phoneList', {phoneService: mockedService});
        var res = controller.viewDetailsBis(12);
        expect(res).toBe(12);
    }))
    
    it('should works', inject(function($componentController){
        mockedService = {
            getPhones: function() {
                return new Promise(function(resolve, reject) {
                    setTimeout(resolve, 100, 'foo');
                })
            },
            getPhoneDetails: function(phoneId) {
                return phoneId;
            }
        }
        spyOn(mockedService, 'getPhoneDetails');
        controller = $componentController('phoneList', {phoneService: mockedService});
        controller.viewDetailsBis(12);
        expect(mockedService.getPhoneDetails).toHaveBeenCalledWith(12);
    }))
    
    it('should works', inject(function($componentController, phoneService){
        mockedService = phoneService;
        spyOn(mockedService, 'getPhoneDetails');
        controller = $componentController('phoneList', {phoneService: mockedService});
        controller.viewDetailsBis(12);
        expect(mockedService.getPhoneDetails).toHaveBeenCalledWith(12);
    }))
    
    it('should works', inject(function($componentController, phoneService){
        mockedService = phoneService;
        spyOn(mockedService, 'getPhoneDetails').and.callFake(function() {
            return 15;
        });
        controller = $componentController('phoneList', {phoneService: mockedService});
        var res = controller.viewDetailsBis(12);
        expect(res).toBe(15);
    }))
});