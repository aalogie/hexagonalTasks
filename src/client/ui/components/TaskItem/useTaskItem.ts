import {HTTP_METHODS} from '@nfq/typed-next-api';

import {useDeleteTask} from 'Client/application/useCases/useDeleteTask';


/**
 * The `useTaskItem` custom hook is designed to provide functionality for managing a specific task item.
 * It initializes and exposes a `handleDeleteTask` function, which allows the deletion of a task from the database.
 *
 * @param taskId The unique identifier string of the task to be managed.
 * @returns An object containing a single function, `handleDeleteTask`,
 * which can be invoked to initiate the deletion of the specified task. It returns a promise to handle the asynchronous operation.
 */
export const useTaskItem = (taskId: string) => {
    const {deleteTask} = useDeleteTask();

    /**
     * This handler function, `handleDeleteTask`, is responsible for deleting the task from the database.
     * It uses the `deleteTask` function obtained from the `useDeleteTask` hook to send a request to the server,
     * targeting the task identified by `taskId`. Upon successful deletion, it triggers updates to the task list.
     */
    const handleDeleteTask = async () => {
        await deleteTask({
            body: {id: taskId},
            method: HTTP_METHODS.DELETE
        });
    };

    return {handleDeleteTask};
};