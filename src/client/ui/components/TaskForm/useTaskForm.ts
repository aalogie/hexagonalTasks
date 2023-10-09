import type {FormEvent} from 'react';

import {HTTP_METHODS} from '@nfq/typed-next-api';

import {useAddTask} from 'Client/application/useCases/useAddTask';


/**
 * Handles the Task Form data.
 *
 * @returns The save handler function.
 */
export const useTaskForm = () => {
    const {addTask} = useAddTask();

    /**
     * This function handles the addition of a new task.
     *
     * @param event The Click event.
     */
    const handleAddTask = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const newTask = {
            id: Date.now().toString(),
            taskBody: '',
            taskTitle: data.get('taskname') as string
        };

        await addTask({
            body: newTask,
            method: HTTP_METHODS.POST
        });

        event.target[0].value = '';
    };

    return {handleAddTask};
};