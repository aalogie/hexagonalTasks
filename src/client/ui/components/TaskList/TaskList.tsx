'use client';

import styled from 'styled-components';

import {TaskItem} from '../TaskItem/TaskItem';

import type {ITask} from 'Client/domain/entities/Tasks';

interface TaskListProps {
    tasks: ITask[];
}

/**
 * The `TaskList` component is a React component designed to render a list of tasks.
 * It receives an array of task objects as a prop and maps over the tasks to render individual `TaskItem` components.
 *
 * @param props       The component props.
 * @param props.tasks TAn array of task objects to be displayed in the list.
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
const TaskList = ({tasks}: TaskListProps) => (
    <List>
        {tasks.map((task: ITask) => <TaskItem key={task.id} task={task} />)}
    </List>
);

TaskList.displayName = 'TaskList';
TaskList.defaultProps = {tasks: []};

export default TaskList;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
`;