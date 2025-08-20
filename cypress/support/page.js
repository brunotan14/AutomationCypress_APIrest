/// <reference types="cypress" />

Cypress.Commands.add('buscarDeviceespecifico', (device_id) => {
    cy.request({
        method: 'GET',
        url: `https://api.restful-api.dev/objects/${device_id}`,
        failOnStatusCode: false,
    }).then((response) => { return response })
})

Cypress.Commands.add('CadastrarDevice', (body) => {
     cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body
    }).then((response) => { return response })
})

Cypress.Commands.add('DeleteDevice', (id) => {
  cy.request({
    method: 'DELETE',
    url: `/objects/${id}`,
    failOnStatusCode: false
  }).then((response) => { return response })
})


Cypress.Commands.add('UpdateDevice', (id, body) => {
  cy.request({
    method: 'PUT',
    url: `/objects/${id}`,
    failOnStatusCode: false,
    body: body
  }).then((response) => { return response })
})