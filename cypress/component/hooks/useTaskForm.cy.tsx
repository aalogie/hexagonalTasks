
import {useTaskForm} from 'Client/ui/components/TaskForm/useTaskForm';

import TestWrapper from 'Tests/support/TestWrapper';

interface CustomRequest {
    body: {
        id: string;
        taskBody: string;
        taskTitle: string;
    };
}

describe('Test useTaskForm hook', () => {
    const newTask = {
        id: '0',
        taskBody: '',
        taskTitle: 'title'
    };

    it('Is a function', () => {
        expect(useTaskForm, 'useTaskForm').to.be.a('function');
    });

    it('returns the correct function', () => {
        cy.mountHook(() => useTaskForm()).then(({MockComponent, values}) => {
            cy.wrap(values).as('values');
            cy.mount(
                <TestWrapper bgColor="" height="" padding="" width="">
                    <MockComponent />
                </TestWrapper>
            );
        }).then(() => {
            cy.get('@values').its('current').its('handleAddTask').should('be.a', 'function');
        });
    });

    it('sends the correct http request with the correct body', () => {
        cy.mountHook(() => useTaskForm()).then(({MockComponent, values}) => {
            cy.wrap(values).as('values');
            cy.mount(
                <TestWrapper bgColor="" height="" padding="" width="">
                    <MockComponent />
                </TestWrapper>
            );
        }).then(() => {
            cy.get('@values').its('current').invoke('handleAddTask', newTask);
        }).then(() => {
            cy.intercept(
                '/localhost:3000/api/tasks/create',
                {hostname: 'localhost:3000'},
                (req: CustomRequest) => req.body.id === '0'
            );
        });
    });
});