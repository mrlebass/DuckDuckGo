/// <reference types="cypress" />

/* Uso de BDD sem usar Cucumber
 *
 * Como um usuário da world-wide web
 * Quero realizar buscas das últimas notícias sobre Bitcoin
 * Para aprofundar meus conhecimentos em Bitcoins
 */

describe('Buscador web', () => {
  context('Dado que acesso a página do buscador', () => { // 
    beforeEach(() => {
      cy.visit('http://duckduckgo.com') // comando para visitar a página desejada
    })

    context('Quando digito a palavra / termo "bitcoin" e clico na lupa', () => { // clique na lupa para buscar
      beforeEach(() => {
        cy.get('#search_form_input_homepage')
          .should('be.visible') // se retirar esse comando ele roda em modo headless
          .type('Bitcoin')
        cy.get('#search_button_homepage')
          .should('be.visible') // se retirar esse comando ele roda em modo headless
          .click()
      })

      it('Então vejo uma lista de resultados sobre o termo que procurei', () => {
        cy.get('.results .result')
          .should('have.length', 11)
          cy.screenshot('after-click')
      })
    })

    context('Quando digito um termo e pressiono ENTER', () => { // utilizando ENTER para buscar
      beforeEach(() => {
        cy.get('#search_form_input_homepage')
          .should('be.visible') // se retirar esse comando ele roda em modo headless
          .type('Bitcoin{enter}')
      })

      it('Então vejo uma lista de resultados sobre o termo que procurei', () => {
        cy.get('.results .result')
          .should('have.length', 11)
          cy.screenshot('after-enter')
      })
    })
  })
})