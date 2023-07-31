import { baseUrl } from '../support/constants';

describe('search', () => {
  it('renders Info page in english and switches to russian when clicks on RU button', () => {
    cy.visit(`${baseUrl}/en/info`);
    cy.get('p').contains('Energy').should('exist');
    cy.get('a').contains('ru').click();
    cy.get('p').contains('Энергия').should('exist');
  });

  beforeEach(() => {
    cy.intercept('POST', 'https://apollo-server-v1.vercel.app/graphql', (req) => {
      req.reply({
        statusCode: 200,
        body: { name: 'Alaskan Malamute' },
      });
    });
  });

  it('renders Info page in english and chooses a specific breed via elastic search', () => {
    cy.visit(`${baseUrl}/en/info`);
    cy.get('input[placeholder*="Search"]').focus().wait(2000).type('a').wait(4000);
  });
});
