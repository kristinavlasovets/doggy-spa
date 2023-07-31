import { baseUrl } from '../support/constants';

describe('booking', () => {
  it('renders Book Appointment page in english and switches to russian when clicks on RU button', () => {
    cy.visit(`${baseUrl}/en/bookAppointment`);
    cy.get('h2').contains('Book An Appointment With Our Groom Specialist Today!').should('exist');
    cy.get('a').contains('ru').click();
    cy.get('h2')
      .contains('Запишитесь на прием к нашему специалисту по грумингу уже сегодня!')
      .should('exist');
  });

  it('renders Info page in english and shows warning messages when trying to send an empty form', () => {
    cy.visit(`${baseUrl}/en/bookAppointment`);
    cy.get('h2').contains('Book An Appointment With Our Groom Specialist Today!').should('exist');
    cy.get('button').contains('Book Appointment').should('exist');
    cy.get('button').contains('Book Appointment').trigger('mouseover').wait(2000).click();

    cy.get('form').then((form$) => {
      form$.on('submit', (e) => {
        e.preventDefault();
      });
    });
  });

  it('renders Info page in english and opens a modal with entered data', () => {
    cy.visit(`${baseUrl}/en/bookAppointment`);
    cy.get('h2').contains('Book An Appointment With Our Groom Specialist Today!').should('exist');

    cy.get('input:first').should('have.attr', 'placeholder', 'First name').type('Kristina');
    cy.get('input').eq(1).should('have.attr', 'placeholder', 'Last name').type('Vlasovets');
    cy.get('textarea')
      .should('have.attr', 'placeholder', 'Any special requests for your pet(s)...')
      .type('Hello from Modsen Doggy Spa!');
    cy.get('button').contains('Book Appointment').should('exist');
    cy.get('button').contains('Book Appointment').trigger('mouseover').wait(2000).click();
  });
});
