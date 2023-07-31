import { baseUrl } from '../support/constants';

describe('payment', () => {
  it('renders Book Appointment page in english and switches to russian when clicks on RU button', () => {
    cy.visit(`${baseUrl}/en/bookAppointment`);
    cy.get('h2').contains('Book An Appointment With Our Groom Specialist Today!').should('exist');
    cy.get('a').contains('ru').click();
    cy.get('h2')
      .contains('Запишитесь на прием к нашему специалисту по грумингу уже сегодня!')
      .should('exist');
  });

  it('renders Info page in english and opens a modal with entered data', () => {
    cy.visit(`${baseUrl}/en/bookAppointment`);
    cy.get('h2').contains('Book An Appointment With Our Groom Specialist Today!').should('exist');

    cy.get('input:first').should('have.attr', 'placeholder', 'First name').type('Kristina');
    cy.get('input').eq(1).should('have.attr', 'placeholder', 'Last name').type('Vlasovets');
    cy.get('input').eq(2).should('have.attr', 'placeholder', 'Email').type('k@gmail.com');
    cy.get('input').eq(3).should('have.attr', 'placeholder', 'Phone number').type('8895665566');
    cy.get('input')
      .eq(4)
      .should('have.attr', 'placeholder', 'Credit Card Number')
      .type('4444444444444333');
    cy.get('input').eq(5).should('have.attr', 'placeholder', 'Expiry Date').type('04/21');

    cy.get('input').eq(6).should('have.attr', 'placeholder', 'CVV').type('111');
    cy.get('input').eq(7).should('have.attr', 'placeholder', 'Name on Card').type('BENSMOLDER');
    cy.get('textarea')
      .should('have.attr', 'placeholder', 'Any special requests for your pet(s)...')
      .type('Hello from Modsen Doggy Spa!');
    cy.get('button').contains('Book Appointment').should('exist');
    cy.get('button').contains('Book Appointment').trigger('mouseover').wait(2000).click();
  });
});
