import {AnimatePresence} from 'framer-motion';
import styled from 'styled-components';

import {TaskItem} from 'UI/components/TaskItem';

import type {ITask} from 'Client/domain/entities/Tasks';

interface TaskListProps {
    /**
     * The array of the task objects.
     */
    tasks: ITask[];
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `TaskList` component is a React component designed to render a list of tasks.
 * It receives an array of task objects as a prop and maps over the tasks to render individual `TaskItem` components.
 *
 * @param props        The component props.
 * @param props.tasks  TAn array of task objects to be displayed in the list.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 *
 * @returns The `TaskList` component returns a JSX element representing a list of tasks.
 * It maps over the provided `tasks` array, creating a `TaskItem` component for each task in the list.
 * The resulting list of `TaskItem` components is wrapped in a `List` element for rendering.
 *
 * @example
 * ```tsx
 *   <TaskList tasks={taskArray} />
 * ```
 */
const TaskList = ({tasks, testId}: TaskListProps) => (
    <List data-cy={testId} id="tasklist">
        <AnimatePresence initial={false} mode="popLayout">
            {tasks.map((task: ITask) => <TaskItem key={task.id} task={task} />)}
        </AnimatePresence>
    </List>
);

TaskList.displayName = 'TaskList';
TaskList.defaultProps = {
    tasks: [],
    testId: 'TaskList'
};

export {TaskList};

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
`;