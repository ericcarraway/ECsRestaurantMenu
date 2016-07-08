// $ cd ecsrestaurantmenu/e2e-tests/

// $ chimp --mocha --browser=firefox

describe('overview page', function () {
    var BASE_URL = 'http://ecsrestaurantmenu.apphb.com/';

    before(function () {
        browser.url(BASE_URL);

        // wait for the page to load
        browser.pause(3000);
    });

    describe('loading the page', function () {
        it('should have the correct title', function () {
            var title = browser.getTitle();
            expect(title).to.equal('EC\'s Restaurant Menu');
        });

        it('should have the correct text for the navbar link', function () {
            var selector = 'a.navbar-brand';
            expect(browser.getText(selector)).to.equal('EC\'s Brick Oven & Grill');
        });
    });

    describe('menu item headings', function () {
        var selector = 'div.page h4';

        var expectedItems = [
            'Fudge Sundae',
            'Roma Salad',
            'Rosemary Chicken',
            'Rowdy Rockport Fish Sandwich',
            'Salmon Salad',
            'Sweet Potato Tots',
            'Tortilla Soup',
            'Veggie Burger'
        ];

        var actualItems;

        before(function () {
            actualItems = browser.getText(selector);
        });

        // loop through the array of expected items;
        // assert that the array of actual items includes each item
        expectedItems.forEach(testFunction);

        function testFunction(item) {
            it('should include \'' + item + '\'', function () {
                expect(actualItems).to.include(item);
            });
        }
    });

    describe('links', function () {
        it('should have a \'Create New Menu Item\' button', function () {
            var selector = '.btn-success';

            expect(browser.getText(selector)).to.equal('Create New Menu Item');
        });
    });
});
