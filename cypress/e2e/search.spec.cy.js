/// <reference types="cypress" />
import searchData from '../fixtures/searchData.json'


/* Uso de BDD sem usar Cucumber
*
* Como um usuário da world-wide web
* Quero realizar buscas das últimas notícias sobre Bitcoin
* Para aprofundar meus conhecimentos em Bitcoins
*/

describe('Casos de Teste - Busca na página DuckDuckGo', () => {

  beforeEach(() => {
    cy.visit('https://duckduckgo.com/') // comando para visitar a página desejada
    cy.get('[id=logo_homepage_link').contains('DuckDuckGo')
    cy.get('.badge-link__title').contains('Cansado de ser rastreado online? Nós podemos ajudar.')
    cy.get('.badge-link__btn').contains('Adicionar o DuckDuckGo ao Chrome')
  })

  describe('Cenário 1 - Pesquisando palavra/termo e clicando na lupa', () => {

    context('Dado que acesso a página do buscador', () => {

      context('Quando digito a palavra / termo "bitcoin" e clico na lupa', () => { // clique na lupa para buscar
        
        beforeEach(() => {
          cy.get('#search_form_input_homepage')
            .should('be.visible') // se retirar esse comando ele roda em modo headless
            .type(searchData.search_subject)
          cy.get('#search_button_homepage')
            .should('be.visible') // se retirar esse comando ele roda em modo headless
            .click()
          cy.screenshot('after-click')
        })

        it('Então vejo uma lista de resultados sobre o termo que procurei', () => {
          cy.get('[id=header_wrapper]')
          cy.get('[id=zci-cryptocurrency]')
          cy.get('[id=links_wrapper]')
          //.should('have.length', 11)
          cy.screenshot('after-click')
        })
      })

    })

  })

  describe('Cenário 2 - Pesquisando palavra/termo e pressionando ENTER', () => {
    
    context('Dado que acesso a página do buscador', () => {
      
      context('Quando digito um termo e pressiono ENTER', () => { // utilizando ENTER para buscar
        
        beforeEach(() => {
          cy.get('#search_form_input_homepage')
            .should('be.visible') // se retirar esse comando ele roda em modo headless
            .type((searchData.search_subject),{enter})
        })
        
        it('Então vejo uma lista de resultados sobre o termo que procurei', () => {
          cy.get('[id=header_wrapper]')
          cy.get('[id=zci-cryptocurrency]')
          cy.get('[id=links_wrapper]')
          //.should('have.length', 11)
          cy.screenshot('after-click')
        })
      })

    })
    
  })

})
