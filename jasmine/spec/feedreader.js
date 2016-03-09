/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have a url property', function() {

            allFeeds.forEach(function(feed){
                //Test if each object has a URL property.
                expect(feed.url).toBeDefined();
                //Test if each object URL property is not an empty string.
                expect(feed.url).not.toBe("");
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('feed has a name', function() {

            allFeeds.forEach(function(feed){
                //Test if each object has a name property.
                expect(feed.name).toBeDefined();
                //Test if each object name property is not an empty string.
                expect(feed.name).not.toBe("");
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            //Test that the body element has a .menu-hidden class by default.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should toggle visibility when clicked', function(){
            $('.menu-icon-link').trigger('click');
            //Test that the body element class toggle to false when the .menu-icon-link is clicked.
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            //Test that the body element class toggle to true when the .menu-icon-link is clicked.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //Extra tests
        it('should have a list that contains 4 links',function(){
            //Test that .feed-list has 4 links.
            expect($('.feed-list').find('a').length).toEqual(4);
        });

        it('should be hidden when one of the link is clicked',function(){
            $('.feed-list a:first').click();
            //Test that the body element class toggle to true when a link is clicked.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function(done){
            //load feed
            loadFeed(0, function(){
                done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has at least a single .entry element', function(done){
            //Compare the size of all the .entry-link array to zero.
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function(){
        //Declare two variable to contain the content of the first and second feed
        var firstFeed,
            secondFeed;

        beforeEach(function(done){

            // Load the first feed
            loadFeed(0, function(){
                // Get the content of the first h2 element. 
                firstFeed = $('.feed').find('h2').text();
                done();
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('changes the content inside .feed container', function(done){

            //Load the first second 
            loadFeed(1, function(){
                //Get the content of the first h2 element.
                secondFeed = $('.feed').find('h2').text();

                //Compare firstFeed with secondFeed.
                expect(firstFeed).not.toEqual(secondFeed);
                done();
            });
            
        });
    });
}());
