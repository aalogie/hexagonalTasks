'use client';


import styled from 'styled-components';

import {TaskItem} from '../TaskItem/TaskItem';

import type {ITask} from 'Client/domain/entities/Tasks';

interface TaskListProps {
    tasks: ITask[];
}

/**
 * Functional component representing a task list module.
 *
 * This component is used to render a list module. It provides functionalities
 * for fetching, listing and deleting a task.
 *
 * @param props       The component props.
 * @param props.tasks The tasks in the props.
 *
 * @returns A React component representing a task list module.
 *
 * @example
 * ```tsx
 *   <TaskList />
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