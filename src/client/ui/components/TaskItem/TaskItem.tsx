
import styled from 'styled-components';

import {useTaskItem} from './useTaskItem';

import type {ITask} from 'Client/domain/entities/Tasks';

interface ComponentProps {
    /**
     * The task to be displayed by the component.
     */
    task: ITask;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `TaskItem` function is a React component designed to render and manage a single task item.
 * It displays a task's title along with a delete button, and it provides the functionality to delete the task.
 * This component is typically used within a task list to represent individual tasks.
 *
 * @param props        The component props.
 * @param props.task   An object representing the task to be displayed.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns The `TaskItem` component returns a JSX element representing a list item (a single task).
 * This list item contains the task's title, a "Delete" button, and a data-testid attribute.
 * When the "Delete" button is clicked, it triggers the deletion of the associated task.
 *
 * @example
 * ```tsx
 * const MyComponent = <TaskItem testId="myTestId">MyComponent</TaskItem>;
 * ```
 */
const TaskItem = ({task, testId}: ComponentProps) => {
    const {handleDeleteTask} = useTaskItem(task.id);

    return (
        <ListItem data-cy={testId}>
            <ItemText>{task.taskTitle}</ItemText><DeleteButton onClick={handleDeleteTask}>x</DeleteButton>
        </ListItem>
    );
};

TaskItem.displayName = 'TaskItem';
TaskItem.defaultProps = {testId: 'TaskItem'};

export {TaskItem};

const ListItem = styled.li`
color: ${({theme}) => theme.colors.pageBackground};
    display: flex;
    justify-content: space-between;

    &:hover {
        color: ${({theme}) => theme.colors.accentLight};
  }
`;

const DeleteButton = styled.span`
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    font-weight: 600;
`;

const ItemText = styled.span`
    color: ${({theme}) => theme.colors.fontLight};
    font-size: 2rem;
`;