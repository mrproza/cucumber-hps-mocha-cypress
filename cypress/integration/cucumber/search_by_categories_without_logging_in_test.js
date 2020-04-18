describe('Search by Categories without logging in', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);

    // Given I open "/" page
    this.actionwords.iOpenHomePagePage("/");
    // And I am not logged in
    this.actionwords.iAmNotLoggedIn();
  });

  it('Search by "Business" category shows courses from that category', function () {
    // When I select category "Business"
    this.actionwords.iSelectCategoryP1("Business");
    // Then in search results I see courses from category "Business"
    this.actionwords.inSearchResultsISeeCoursesFromCategoryP1("Business");
  });
});
