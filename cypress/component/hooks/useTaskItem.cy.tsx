import {useTaskItem} from 'Client/ui/components/TaskItem/useTaskItem';

import TestWrapper from 'Tests/support/TestWrapper';

describe('Test useTaskItem hook', () => {
    const taskId = '0';

    it('Is a function', () => {
        expect(useTaskItem, 'useTaskItem').to.be.a('function');
    });

    it('returns the correct function', () => {
        cy.mountHook(() => useTaskItem(taskId)).then(({MockComponent, values}) => {
            cy.wrap(values).as('values');
            cy.mount(
                <TestWrapper bgColor="" height="" padding="" width="">
                    <MockComponent />
                </TestWrapper>
            );
        }).then(() => {
            cy.get('@values').its('current').its('handleDeleteTask').should('be.a', 'function');
        });
    });
});