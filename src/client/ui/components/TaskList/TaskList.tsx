'use client';

import type {Dispatch, SetStateAction} from 'react';

import styled from 'styled-components';

import {TaskItem} from '../TaskItem/TaskItem';

import type {ITask} from 'Client/domain/entities/Tasks';

interface TaskListProps {
    setTasks: Dispatch<SetStateAction<ITask[]>>;
    tasks: ITask[];
}

/**
 * TaskList.
 *
 * @param props          The component props.
 * @param props.tasks    The tasks in the props.
 * @param props.setTasks The setter function of the tasks array.
 * @returns The TaskList component.
 */
const TaskList = ({setTasks, tasks}: TaskListProps) => (
    <List>
        {tasks.map((task: ITask) => <TaskItem key={task.id} setTasks={setTasks} task={task} />)}
    </List>
);

export default TaskList;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
`;