// import { describe } from "mocha";
import config from "../fixtures/config.json";
import selectors from "./Selectors/Selectors";
// import Selectors from"./Selectors/Selectors"

describe("UI-Login Test",function(){
    const Selectors = new selectors()
    it("Login with given credentuials",function(){
        cy.visit(config.baseURL)
        Selectors.getInputElbyType("email").type(config.username)
        Selectors.getInputElbyType("password").type(config.password)
        Selectors.getButtonElbyType("submit").click()
        cy.location('pathname').should('eq',"/home")
        cy.title().should('eq', 'Analytics Dashboard - Four Eyes Insight')
    })
})