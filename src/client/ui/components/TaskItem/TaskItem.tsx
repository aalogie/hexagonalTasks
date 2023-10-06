import type {Dispatch, SetStateAction} from 'react';

import styled from 'styled-components';

import {useDeleteTask} from 'Client/application/useCases/useDeleteTask';
import {useGetTasks} from 'Client/application/useCases/useGetTasks';

import type {ITask} from 'Client/domain/entities/Tasks';


interface TaskItemProps {
    setTasks: Dispatch<SetStateAction<ITask[]>>;
    task: ITask;
}
/**
 * TaskList.
 *
 * @param props          The component props.
 * @param props.task     The task in props.
 * @param props.setTasks The setter for the tasklist.
 * @returns The TaskList component.
 */
const TaskItem = ({setTasks, task}: TaskItemProps) => {
    const {getTasks} = useGetTasks();
    const {deleteTask} = useDeleteTask();

    /**
     * This handler deletes the task from local storage using the TaskService and rerenders the tasklist.
     */
    const handleDeleteTask = () => {
        deleteTask(task.id);
        setTasks(getTasks);
    };

    return (
        <ListItem>
            <ItemText>{task.taskTitle}</ItemText><DeleteButton onClick={handleDeleteTask}>x</DeleteButton>
        </ListItem>
    );
};

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