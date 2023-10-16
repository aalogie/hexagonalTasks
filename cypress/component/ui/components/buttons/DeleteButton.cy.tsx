import {DeleteButton} from 'Client/ui/components/buttons/DeleteButton';

import TestWrapper from 'Tests/support/TestWrapper';

describe('SubmitButton', () => {
    const taskId = 'test';

    it('Renders', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <DeleteButton taskId={taskId} testId="SubmitButton" />
            </TestWrapper>
        );
        cy.getCy('SubmitButton').should('exist');
    });

    it('Renders as SubmitButton element', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <DeleteButton taskId={taskId} testId="SubmitButton" />
            </TestWrapper>
        );
        cy.getCy('SubmitButton').should('be.htmlElement', 'span');
    });

    it('Does not throw if clicked without onClick function', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <DeleteButton taskId={taskId} testId="SubmitButton" />
            </TestWrapper>
        );

        cy.getCy('SubmitButton').click().should('exist');
    });
});