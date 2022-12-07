import  * as lists from '@fixtures/lists.json'

it('playing with typescript', () => {

  cy.intercept('POST', '/api/lists')
  .as('listCreate')

  cy.visit('http://localhost:3000/board/1')

  

  lists.forEach(list => {

    cy.get('[data-cy="add-list"]')
      .type(`${list.name}{enter}`)
  
   cy.wait('@listCreate')

  })
    
});