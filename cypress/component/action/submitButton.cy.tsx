import {SubmitButton} from 'Client/ui/components/buttons/SubmitButton';

import TestWrapper from 'Tests/support/TestWrapper';

describe('SubmitButton', () => {
    it('Renders', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <SubmitButton label="Add" testId="SubmitButton" />
            </TestWrapper>
        );
        cy.getCy('SubmitButton').should('exist');
    });

    it('Renders as SubmitButton element', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <SubmitButton label="Add" testId="SubmitButton" />
            </TestWrapper>
        );
        cy.getCy('SubmitButton').should('be.htmlElement', 'button');
    });

    it('Renders the given label', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <SubmitButton label="Add" testId="SubmitButton" />
            </TestWrapper>
        );
        cy.getCy('SubmitButton').contains('Add');
    });

    it('Does not throw if clicked without onClick function', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <SubmitButton
                    label="Add"
                    testId="SubmitButton"
                />
            </TestWrapper>
        );

        cy.getCy('SubmitButton').click().should('exist');
    });
});