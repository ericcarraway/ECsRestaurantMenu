describe('create view', function () {
    var BASE_URL = 'http://ecsrestaurantmenu.apphb.com/';

    before(function () {
        browser.url(BASE_URL);

        // wait for the page to load
        browser.pause(3000);
    });

    it('should navigate to \'New Menu Item\'', function () {
        var selector = '.btn-success';
        var heading;

        browser.click(selector);
        heading = browser.getText('h2');

        expect(heading).to.equal('New Menu Item');
    });

    describe('input headings', function () {
        var selector = 'div.page h4';

        var expectedHeadings = [
            'Name',
            'Price',
            'Picture URL'
        ];

        var actualHeadings;

        before(function () {
            actualHeadings = browser.getText(selector);
        });

        // loop through the array of expected headings;
        // assert that the array of actual headings includes each heading
        expectedHeadings.forEach(testFunction);

        function testFunction(heading) {
            it('should include \'' + heading + '\'', function () {
                expect(actualHeadings).to.include(heading);
            });
        }
    });
});
