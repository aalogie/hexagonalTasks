import {TaskList} from 'Client/ui/components/TaskList';

import TestWrapper from 'Tests/support/TestWrapper';

describe('List component', () => {
    it('renders the component', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskList testId="TaskList" />
            </TestWrapper>
        );
        cy.getCy('TaskList').should('exist');
    });

    it('Renders as ul element', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskList testId="TaskList" />
            </TestWrapper>
        );
        cy.getCy('TaskList').should('be.htmlElement', 'ul');
    });

    it('should render even if empty', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskList testId="TaskList" />
            </TestWrapper>
        );
        cy.getCy('TaskList').children().should('have.length', 0);
    });

    it('should render the correct number of items', () => {
        const tasksList = [
            {
                id: '0',
                taskBody: '',
                taskTitle: 'title'
            },
            {
                id: '1',
                taskBody: '',
                taskTitle: 'title'
            }
        ];

        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TaskList
                    tasks={tasksList}
                    testId="TaskList"
                />
            </TestWrapper>
        );
        cy.getCy('TaskList').children().should('have.length', 2);
    });
});