class selectors{
    getInputElbyType(type){
        return cy.get('input[type='+type+']')
    }

    getButtonElbyType(type){
        return cy.get('button[type='+type+']').contains('Login')
    }
    getTextbyCSS(text){
        return cy.get(".menu-item-name").contains(text)
    }
}
export default selectors