import {TextInput} from 'Client/ui/components/TextInput';

import TestWrapper from 'Tests/support/TestWrapper';

describe('InputField', () => {
    it('Renders', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TextInput name="input" testId="input" type="text" />
            </TestWrapper>
        );
        cy.getCy('input').should('exist');
    });

    it('Renders as input element', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TextInput name="input" testId="input" type="text" />
            </TestWrapper>
        );
        cy.getCy('input').should('be.htmlElement', 'input');
    });

    it('renders with the correct label', () => {
        const label = 'Email';
        const name = 'email';
        const testId = 'email-field';

        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TextInput label={label} name={name} testId={testId} type="text" />
            </TestWrapper>
        );

        cy.get('label').should('have.text', label);
    });

    it('check entered text', () => {
        cy.mount(
            <TestWrapper bgColor="" height="" padding="" width="">
                <TextInput name="input" testId="input" type="text" />
            </TestWrapper>
        );
        cy.getCy('input').type('test');
        cy.getCy('input').should('have.value', 'test');
    });
});