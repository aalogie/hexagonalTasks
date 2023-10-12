import styled from 'styled-components';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The optional label for the input field.
     */
    label?: string;
    /**
     * The name attribute for the input field.
     */
    name: string;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
    /**
     * The type attribute for the input field.
     */
    type: string;
}

/**
 * The `TextInput` Component.
 *
 * @param props        The component props.
 * @param props.label  The label for the input field.
 * @param props.name   The name attribute for the input field.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @param props.type   The input element type.
 * @returns A React element representing the `TextInput` component.
 * @todo Add true documentation!
 *
 * @example
 * ```tsx
 * const MyComponent = <TextInput testId="myTestId">MyComponent</TextInput>;
 * ```
 */
const TextInput = ({label, name, testId, type}: ComponentProps) => (
    <Label>
        {label}
        <InputField data-cy={testId} name={name} type={type} />
    </Label>
);

TextInput.displayName = 'TextInput';
TextInput.defaultProps = {testId: 'TextInput'};

export {TextInput};

const InputField = styled.input`
    background-color: ${({theme}) => theme.colors.brandMain} ;
    border: none;
    font-size: 2rem;
    height: 4rem;
    outline: none;
    padding: 1rem;
    width: 100%;
`;

const Label = styled.p.attrs({as: 'label'})`
    width: 100%;

    &:focus-within {
        color: gray;
    }
`;