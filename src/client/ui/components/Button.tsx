import {lighten} from '@nfq/react-grid';
import styled from 'styled-components';

import type {WithOptionalChildren} from 'types/global';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The label text for the button.
     */
    label: string;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `Button` Component.
 *
 * @param props        The component props.
 * @param props.label  The label of the button. This is the text that will be displayed on the button.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns A React element representing the `Button` component.
 * @todo Add true documentation!
 *
 * @example
 * ```tsx
 * const MyComponent = <Button testId="myTestId">MyComponent</Button>;
 * ```
 */
const Button = ({label, testId}: WithOptionalChildren<ComponentProps>) => (
    <Wrapper data-cy={testId} type="submit">{label}</Wrapper>
);

Button.displayName = 'Button';
Button.defaultProps = {testId: 'Button'};

export {Button};

const Wrapper = styled.button`
    background-color: ${({theme}) => lighten(theme.colors.brandMain, 60)};
    border: none;
    cursor: pointer;
    font-size: large;
    height: 4rem;
    min-width: 10rem;
`;