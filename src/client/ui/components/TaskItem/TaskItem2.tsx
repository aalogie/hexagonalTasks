import styled from 'styled-components';

import type {WithChildren} from 'types/global';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `TaskItem` Component.
 *
 * @param props        The component props.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns A React element representing the `TaskItem` component.
 * @todo Add true documentation!
 *
 * @example
 * ```tsx
 * const MyComponent = <TaskItem testId="myTestId">MyComponent</TaskItem>;
 * ```
 */
const TaskItem = ({testId}: WithChildren<ComponentProps>) => (
    <Wrapper data-cy={testId}>
        <ItemText>asdf</ItemText>
    </Wrapper>
);

TaskItem.displayName = 'TaskItem';
TaskItem.defaultProps = {testId: 'TaskItem'};

export {TaskItem};

const Wrapper = styled.div``;

const ItemText = styled.span`

`;