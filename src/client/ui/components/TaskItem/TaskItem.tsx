
import {m as motion} from 'framer-motion';
import styled from 'styled-components';

import {DeleteButton} from '../buttons/DeleteButton';

import {dropAnimation} from 'Client/ui/animations/taskList';

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
const TaskItem = ({task, testId}: ComponentProps) => (
    <ListItem
        animate="visible"
        data-cy={testId}
        exit="exit"
        initial="hidden"
        transition={{duration: 0.1}}
        variants={dropAnimation}
    >
        <ItemText>{task.taskTitle}</ItemText>
        <DeleteButton taskId={task.id} />
    </ListItem>
);

TaskItem.displayName = 'TaskItem';
TaskItem.defaultProps = {testId: 'TaskItem'};

export {TaskItem};

const ListItem = styled(motion.li)`
color: ${({theme}) => theme.colors.pageBackground};
    display: flex;
    justify-content: space-between;

    &:hover {
        color: ${({theme}) => theme.colors.accentLight};
  }
`;

const ItemText = styled.span`
    color: ${({theme}) => theme.colors.fontLight};
    font-size: 2rem;
`;