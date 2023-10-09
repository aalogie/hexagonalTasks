
import styled from 'styled-components';

import {useDeleteTask} from 'Client/application/useCases/useDeleteTask';

import {HTTP_METHODS} from '@nfq/typed-next-api';
import type {ITask} from 'Client/domain/entities/Tasks';


interface TaskItemProps {
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
const TaskItem = ({task}: TaskItemProps) => {
    const {deleteTask} = useDeleteTask();

    /**
     * This handler deletes the task from local storage using the TaskService and rerenders the tasklist.
     */
    const handleDeleteTask = async () => {
        await deleteTask({
            body: {id: task.id},
            method: HTTP_METHODS.DELETE
        });
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