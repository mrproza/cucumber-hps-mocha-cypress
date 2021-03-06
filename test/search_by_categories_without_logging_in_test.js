describe('Search by Categories without logging in', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    // Given I open page "/"
    this.actionwords.iOpenPage("/");
    // And I am not logged in
    this.actionwords.iAmNotLoggedIn();
  });

  describe('Search by category shows courses from that category', function () {
    function searchByCategoryShowsCoursesFromThatCategory (category) {
      // When I select category "<category>"
      this.actionwords.iSelectCategory(category);
      // Then in search results I see courses from category "<category>"
      this.actionwords.inSearchResultsISeeCoursesFromCategory(category);
    }

    it('business', function () {
      searchByCategoryShowsCoursesFromThatCategory.apply(this, ['Business']);
    });

    it('design', function () {
      searchByCategoryShowsCoursesFromThatCategory.apply(this, ['Design']);
    });
  });
});
