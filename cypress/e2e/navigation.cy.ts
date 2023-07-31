import { baseUrl } from '../support/constants';

describe('navigation', () => {
  it('renders Home page in english', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('h2').contains('Dog Collars').should('exist');
  });

  it('renders Home page and navigates to Info page when clicked on the Info link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('Info').click();
    cy.url().should('eq', `${baseUrl}/en/info`);
  });

  it('renders Home page and navigates to Book Appointment page when clicked on the Book Appointment link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('Book Appointment').click();
    cy.url().should('eq', `${baseUrl}/en/bookAppointment`);
  });

  it('renders Home page and navigates to Spa Services page when clicked on the Spa Services link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('Spa Services').click();
    cy.url().should('eq', `${baseUrl}/en/spaServices`);
  });

  it('renders Home page and navigates to Blog page when clicked on the Blog link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('Blog').click();
    cy.url().should('eq', `${baseUrl}/en/blog`);
  });

  it('renders Home page and navigates to About Us page when clicked on the About Us link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('About Us').click();
    cy.url().should('eq', `${baseUrl}/en/aboutUs`);
  });

  it('renders Home page and navigates to Contact Us page when clicked on the Contact Us link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('Contact Us').click();
    cy.url().should('eq', `${baseUrl}/en/contactUs`);
  });

  it('renders Info page and navigates to Home page when clicked on the Home link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en/info`);
    cy.get('a').contains('Home').click();
    cy.url().should('eq', `${baseUrl}/en`);
  });
});
