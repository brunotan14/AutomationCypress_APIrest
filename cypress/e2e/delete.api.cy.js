/// <reference types="cypress" />

// Para realizar um delete, é necessário antes realizar uma requisição POST. Não é recomendado usar a requisição post de outro arquivo
// pois pode dá erro no futuro, 
describe("Delete", () => {
    const body = require('../fixtures/Register_Device_sucess.json')
    let id
it("Deletar um dispositivo", () => {
    cy.CadastrarDevice(body).as("ResultPost")

    cy.get("@ResultPost").then((response)=>{
        expect(response.status).equal(200)
     

    id = response.body.id

    cy.DeleteDevice(id).as('ResultDelete')

  cy.get('@ResultDelete').then((response_del) => {
    expect(response_del.status).to.equal(200)
    expect(response_del.body.message).to.exist
  })

})
})

it("Deletando um dispositivo não existente", ()=>{
    const id_inexistente = 'bruno87878'
    
    cy.DeleteDevice(id_inexistente).as('ResultDelete')

    cy.get('@ResultDelete').then((response_del)=>{
        expect(response_del.status).equal(404)
        expect(response_del.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)
    })

})

})


