import {Button} from 'Client/ui/components/Button';

import TestWrapper from 'Tests/support/TestWrapper';

describe('Button', () => {
    it('Renders', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <Button label="Add" testId="Button" />
            </TestWrapper>
        );
        cy.getCy('Button').should('exist');
    });

    it('Renders as button element', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <Button label="Add" testId="Button" />
            </TestWrapper>
        );
        cy.getCy('Button').should('be.htmlElement', 'button');
    });

    it('Renders the given label', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <Button label="Add" testId="Button" />
            </TestWrapper>
        );
        cy.getCy('Button').contains('Add');
    });

    it('Does not throw if clicked without onClick function', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <Button
                    label="Add"
                    testId="Button"
                />
            </TestWrapper>
        );

        cy.getCy('Button').click().should('exist');
    });
});