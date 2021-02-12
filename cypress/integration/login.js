

import config from "../fixtures/config.json";
import selectors from "./Selectors/Selectors";
// import Selectors from"./Selectors/Selectors"

describe("Login Test",function(){
    const Selectors = new selectors()
    it("1. Login with given credentials - UI",function(){
       
        cy.visit(config.baseURL)
        Selectors.getInputElbyType("email").type(config.username)
        Selectors.getInputElbyType("password").type(config.password)
        Selectors.getButtonElbyType("submit").click()
        cy.location('pathname').should('eq',"/home")
        cy.title().should('eq', 'Analytics Dashboard - Four Eyes Insight')
        cy.clearLocalStorage()
        Selectors.getTextbyCSS("Sign Out").click()
    })
    it("2. Intercept the api",function(){
        cy.intercept('POST', config.baseURL, {
  statusCode: 200,
  body: 'it worked!'
        })
})

it("3. Logout functionality with response code",function(){
    Selectors.getInputElbyType("email").type(config.username)
    Selectors.getInputElbyType("password").type(config.password)
    Selectors.getButtonElbyType("submit").click()
    Selectors.getTextbyCSS("Sign Out").click().intercept(config.baseURL+'/access/logout',(req=>expect(req.status).to.eq(200)))
   
})

  
})

