import {TaskItem} from 'Client/ui/components/TaskItem';

import TestWrapper from 'Tests/support/TestWrapper';

describe('SubmitButton', () => {
    const task = {
        id: '0',
        taskBody: '',
        taskTitle: 'title'
    };

    it('Renders', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskItem task={task} />
            </TestWrapper>
        );
        cy.getCy('TaskItem').should('exist');
    });

    it('Renders as SubmitButton element', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskItem task={task} />
            </TestWrapper>
        );
        cy.getCy('TaskItem').should('be.htmlElement', 'li');
    });

    it('Renders the given label', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskItem task={task} />
            </TestWrapper>
        );
        cy.getCy('TaskItem').contains('title');
    });
});