/// <reference types="cypress" />

// Para realizar um delete, é necessário antes realizar uma requisição POST. Não é recomendado usar a requisição post de outro arquivo
// pois pode dá erro no futuro.
describe("Update", () => {
    const cadastro = require('../fixtures/Register_Device_sucess.json')
    const update = require('../fixtures/Update_Device_sucess.json')
it("Alterando um dispositivo", () => {
    
    cy.CadastrarDevice(cadastro)
      .as("ResultPost")

    cy.get("@ResultPost").then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.name).equal('Celular de Bruno Nathan')
        expect(response.body.data.color).equal('Red')

     
    const id = response.body.id
    // Fazendo alterações no dispositivo com o put
    cy.UpdateDevice(id, update).as('ResultPut')

    cy.get('@ResultPut').then((response_put)=>{
        expect(response_put.status).equal(200)
        expect(response_put.body.name).equal('Celular de Bruno Nathan 2 geração')
        expect(response_put.body.data.color).equal('green')
    })

        // validando se a mudança foi feita com o get
    cy.buscarDeviceespecifico(id).as('ResultGet')

    cy.get('@ResultGet').then((response_get)=>{
        expect(response_get.status).equal(200)
        expect(response_get.body.name).equal('Celular de Bruno Nathan 2 geração')
    })
})

})

})