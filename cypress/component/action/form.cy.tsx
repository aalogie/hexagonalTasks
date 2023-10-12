import {TaskForm} from 'Client/ui/components/TaskForm';

import TestWrapper from 'Tests/support/TestWrapper';

describe('Form', () => {
    it('renders the component', () => {
        const onSubmit = cy.stub();

        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskForm testId="Form" onSubmit={onSubmit}>
                    <div data-cy="child">Child</div>
                </TaskForm>
            </TestWrapper>
        );

        cy.getCy('Form').should('exist');
    });

    it('renders as an form', () => {
        const onSubmit = cy.stub();

        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskForm testId="Form" onSubmit={onSubmit}>
                    <div data-cy="child">Child</div>
                </TaskForm>
            </TestWrapper>

        );

        cy.getCy('Form').should('be.htmlElement', 'form');
    });

    it('calls onSubmit when submit button is clicked', () => {
        const onSubmit = cy.stub().as('submitStub');

        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskForm testId="Form" onSubmit={onSubmit}>
                    <button type="submit">Submit</button>
                </TaskForm>
            </TestWrapper>
        );

        cy.getCy('Form').get('button[type="submit"]').click();
        cy.get('@submitStub').should('be.calledOnce');
    });
});