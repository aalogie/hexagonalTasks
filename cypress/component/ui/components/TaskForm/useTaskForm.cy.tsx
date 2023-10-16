
import {DiProvider, injectable} from 'react-magnetic-di';

import {useTaskForm} from 'Client/ui/components/TaskForm/useTaskForm';

import {useAddTask} from 'Client/application/useCases/useAddTask';
import TestWrapper from 'Tests/support/TestWrapper';


describe('Test useTaskForm hook', () => {
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
        const taskName = 'Test';
        const addTask = cy.spy().as('addTask');
        const useAddTaskDi = injectable(useAddTask, () => ({addTask}));

        cy.mountHook(useTaskForm).then(({MockComponent, values}) => {
            cy.wrap(values).as('values');
            cy.mount(
                <TestWrapper bgColor="" height="" padding="" width="">
                    <DiProvider use={[useAddTaskDi]}>
                        <MockComponent>
                            {({handleAddTask}) => (
                                <form onSubmit={handleAddTask}>
                                    <input data-cy="input" name="taskname" type="text" />
                                    <button data-cy="submitButton" type="submit">submitbutton</button>
                                </form>
                            )}
                        </MockComponent>
                    </DiProvider>
                </TestWrapper>
            );
        }).then(() => {
            cy.getCy('input').type(taskName);
            cy.getCy('submitButton').click();
            cy.get('@addTask').should('be.calledOnceWith', Cypress.sinon.match({
                body: {
                    taskBody: '',
                    taskTitle: taskName
                },
                method: 'POST'
            }));
        });
    });
});