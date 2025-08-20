/// <reference types="cypress" />
describe("Buscar dispositivos", () => {

    it("Buscar um dispositivo especifico", () => {
        const device_id = '8'
        cy.buscarDeviceespecifico(device_id).as('ResultGet')

        cy.get('@ResultGet').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.id).equal(device_id)
            expect(response.body.name).equal("Apple Watch Series 8")
            expect(response.body).not.empty //verificar se o body não é vazio, o empty só serve para strings
        })

     })
    
     it("Buscar um device inexistentte", () => {
         const device_id = 'xct'
        cy.buscarDeviceespecifico(device_id).as('ResultGet')

        cy.get('@ResultGet').then((response)=>{
            expect(response.status).equal(404)
            expect(response.body.error).equal(`Oject with id=${device_id} was not found.`)

        })
     })
})




// /// <reference types="cypress" />

// describe("Buscar dispositivos", () => {

//     it("Buscar um dispositivo especifico", () => {

//         const device_id = '8'

//         cy.request({
//             method: 'GET',
//             url: `https://api.restful-api.dev/objects/${device_id}`,
//             failOnStatusCode: false,
//         }).then((response)=>{
//             expect(response.status).equal(200)
//             expect(response.body.id).equal(device_id)
//             expect(response.body.name).equal("Apple Watch Series 8")
//             expect(response.body).not.empty //verificar se o body não é vazio, o empty só serve para strings
//         })

        
         
//     })
// })