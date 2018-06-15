describe('dummyCtrlTest', function() {
    beforeEach(module('dummyModule'));        

    it('should contain 3 persons', inject(function($controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').respond([{name: 'Motorola zoom'}, {name: 'Nexus'}]);
        var scope = {};
        $controller('dummyCtrl', {$scope: scope});
        expect(scope.tablets).toBeUndefined();
        $httpBackend.flush();
        expect(scope.tablets[0].name).toBe('Motorola zoom');
        expect(scope.tablets[1].name).toBe('Nexus');
        expect(scope.persons.length).toBe(3);
    }));
})