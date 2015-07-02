describe("signupForm", function(){
	var html, scope, compiled, element;
	beforeEach(module('signupForm'));
	beforeEach(module("signupForm.html"));
	
	beforeEach(inject(function($rootScope, $compile){
		html = "<opt-in><div class='brand-logo'></div></opt-in>";
		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}))

	it("should render the element correctly", function(){
		expect(element.find("fieldset").length).toBe(1);
		expect(element.find("legend").text()).toBe("opt-in");
		expect(element.find(".brand-logo").length).toBe(1);
		expect(element.find("#firstName").length).toBe(1);
		expect(element.find("#lastName").length).toBe(1);
		expect(element.find("#email").length).toBe(1);
		expect(element.find("button").length).toBe(1);
		expect(element.find("button").text()).toBe("Submit");
	});
})