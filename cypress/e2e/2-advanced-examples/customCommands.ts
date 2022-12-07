import  * as lists from '@fixtures/lists.json'

it('create a new board', () => {

 cy.visit('http://localhost:3000/board/1')

 cy.getByPlaceholder('Name of your first board')

  })
    
