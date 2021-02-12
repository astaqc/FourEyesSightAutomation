class selectors{
    getInputElbyType(type){
        return cy.get('input[type='+type+']')
    }

    getButtonElbyType(type){
        return cy.get('button[type='+type+']').contains('Login')
    }
}
export default selectors