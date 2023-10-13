import styled from 'styled-components';

import {useTaskItem} from '../TaskItem/useTaskItem';

import type {WithOptionalChildren} from 'types/global';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The `taskId` property represents a unique identifier of the item to be deleted.
     */
    taskId: string;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `DeleteButton` Component.
 *
 * @param props        The component props.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @param props.taskId The id of the item to be deleted.
 * @returns A React element representing the `DeleteButton` component.
 * @todo Add true documentation!
 *
 * @example
 * ```tsx
 * const MyComponent = <DeleteButton testId="myTestId">MyComponent</DeleteButton>;
 * ```
 */
const DeleteButton = ({taskId, testId}: WithOptionalChildren<ComponentProps>) => {
    const {handleDeleteTask} = useTaskItem(taskId);

    return (
        <Wrapper data-cy={testId} onClick={handleDeleteTask}>x</Wrapper>
    );
};

DeleteButton.displayName = 'DeleteButton';
DeleteButton.defaultProps = {testId: 'DeleteButton'};

export {DeleteButton};

const Wrapper = styled.span`
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    font-weight: 600;
`;