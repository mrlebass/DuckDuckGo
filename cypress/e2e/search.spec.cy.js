//<reference types="cypress" />
import searchData from '../fixtures/searchData.json'


/* Uso de BDD sem usar Cucumber
*
* Como um usuario da world-wide web
* Quero realizar buscas das ultimas noticias sobre Bitcoin
* Para aprofundar meus conhecimentos em Bitcoins
*/

describe('Casos de Teste - Busca na pagina DuckDuckGo', () => {

  beforeEach(() => {
    cy.visit('http://duckduckgo.com/') // comando para visitar a pagina desejada
    cy.get('.ddgsi.ddgsi-horn')
    cy.get('[id=logo_homepage_link').contains('DuckDuckGo')
    cy.get('.badge-link__title').contains('Tired of being tracked online? We can help.')
    cy.get('.badge-link__btn').contains('Add DuckDuckGo to Chrome')
  })

  describe('Scenario 1 - Pesquisando palavra/termo e clicando na lupa', () => {

    context('GIVEN acesso a pagina do buscador', () => {

      context('WHEN digito a palavra / termo "bitcoin" E clico na lupa', () => { // clique na lupa para buscar
        
        beforeEach(() => {
          cy.get('#search_form_input_homepage')
            .should('be.visible') // se retirar esse comando ele roda em modo headless
            .type(searchData.search_subject)
          cy.get('#search_button_homepage')
            .should('be.visible') // se retirar esse comando ele roda em modo headless
            .click()
          cy.screenshot('after-click')
        })

        it('THEN vejo uma lista de resultados sobre o termo que procurei', () => {
          cy.get('[id=header_wrapper]')
          cy.get('[id=zci-cryptocurrency]')
          cy.get('[id=links_wrapper]')
          //.should('have.length', 11)
          cy.screenshot('after-click')
        })
      })

    })

  })

  describe('Scenario 2 - Pesquisando palavra/termo e pressionando ENTER', () => {
    
    context('GIVEN que acesso a pagina do buscador', () => {
      
      context('WHEN digito um termo E pressiono ENTER', () => { // utilizando ENTER para buscar
        
        beforeEach(() => {
          cy.get('#search_form_input_homepage')
            .should('be.visible') // se retirar esse comando ele roda em modo headless
            .type(searchData.search_subject)
            .type('{enter}')
        })
        
        it('THEN vejo uma lista de resultados sobre o termo que procurei', () => {
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
