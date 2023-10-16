
import type {FormEvent} from 'react';

import {useFormSubmit} from 'Client/ui/components/TaskForm/useFormSubmit';

import TestWrapper from 'Tests/support/TestWrapper';

describe('Test useFormSubmit hook', () => {
    /**
     * The hook method.
     *
     * @param e The submit event.
     * @returns The event preventDefault method as an example.
     */
    const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

    it('Is a function', () => {
        expect(useFormSubmit, 'useFormSubmit').to.be.a('function');
    });

    it('returns the correct function', () => {
        cy.mountHook(() => useFormSubmit({onSubmit})).then(({MockComponent, values}) => {
            cy.wrap(values).as('values');
            cy.mount(
                <TestWrapper bgColor="" height="" padding="" width="">
                    <MockComponent />
                </TestWrapper>
            );
        }).then(() => {
            cy.get('@values').its('current').its('handleOnSubmit').should('be.a', 'function');
        });
    });
});