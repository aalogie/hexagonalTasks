import {useAddTask} from 'Client/application/useCases/useAddTask';
import TestWrapper from 'Tests/support/TestWrapper';

describe('Test useAddTask hook', () => {
    it('Is a function', () => {
        expect(useAddTask, 'useAddTask').to.be.a('function');
    });

    it('returns the correct function', () => {
        cy.mountHook(() => useAddTask()).then(({MockComponent, values}) => {
            cy.wrap(values).as('values');
            cy.mount(
                <TestWrapper bgColor="" height="" padding="" width="">
                    <MockComponent />
                </TestWrapper>
            );
        }).then(() => {
            cy.get('@values').its('current').its('addTask').should('be.a', 'function');
        });
    });
});