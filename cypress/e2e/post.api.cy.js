/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
describe("Criar um dispositivo", () => {
   const dataAtual = new Date().toISOString().slice(0, 10)
   const name = faker.person.firstName()
    const body = {
            "name": name,
            "data": {
                "year": 2022,
                 "color": "Red",
                "price": 1000,
                "owner": "Pizzaria Sabor da Serra"
            }
    }
    it("Criando um dispositivo", () => {
       cy.CadastrarDevice(body).as("ResultPost")

        cy.get("@ResultPost").then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)

            //verificar se a data de criação é a mesma de hoje
            console.log(response.body.createdAt.slice(0, 10))
            console.log(new Date().toISOString().slice(0, 10)) //retorna a data de hoje sem o horário
        })

    })
    

    it("Cadastrar um dispositivo sem mandar dados", () =>{
        cy.CadastrarDevice().as("ResultPost")

        cy.get("@ResultPost").then((response)=>{
            expect(response.status).equal(400)
            expect(response.body.error).equal("400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.")
        })

    })
    })



