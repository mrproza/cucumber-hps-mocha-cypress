exports.Actionwords = {
  iOpenPage: function (page) {
    cy.visit(page);
    cy.url().should('eq', Cypress.config().baseUrl+'/')
  },
  iAmNotLoggedIn: function () {
    cy.get('.udlite-text-sm').contains('Log in').then( login => {
      expect(login.text()).to.be.equal('Log in')
    });
    //cy.get('[data-purpose="header-login"]').should('contain', 'Log In');
  },
  iSelectCategory: function (category) {
    cy.log('Category to select: \"'+category+'\"')
    cy.get('.udlite-text-sm').contains('Categories').trigger('mouseover')
    cy.get('.js-browse-nav-level-one li')
      .each( (el, index) => {
        cy.log(index+') \"'+el.text()+'\"');
        if(el.text() == category){
          cy.wrap(el).find('a').click()
          cy.get('#header-browse-nav-level-two li').then( (elelemnts2level) => {
            cy.wrap(elelemnts2level).first().click()
          });
        }
      });
  },
  inSearchResultsISeeCoursesFromCategory: function (category) {
    cy.get('.udlite-heading-xxl').then( text => {
      expect(text.text()).to.be.equal(category+' Courses');
    });

  }
};
