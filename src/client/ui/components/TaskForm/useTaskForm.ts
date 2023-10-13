import type {FormEvent} from 'react';

import {HTTP_METHODS} from '@nfq/typed-next-api';

import {useAddTask} from 'Application/useCases/useAddTask';

/**
 * The `useTaskForm` custom hook is designed to provide functionality for managing a task form for adding new tasks.
 * It initializes and exposes a `handleAddTask` function, which handles the submission of a new task.
 * This hook is typically used in components where task creation or form submission is required.
 *
 * @returns * An object containing a single function, `handleAddTask`, which can be invoked to submit a new task.
 * This function takes a `FormEvent` as its parameter, which represents the form submission event.
 */
export const useTaskForm = () => {
    const {addTask} = useAddTask();

    /**
     * This function, `handleAddTask`, handles the addition of a new task when the task creation form is submitted.
     *
     * @param event The form submission event triggered when the user submits the task creation form.
     */
    const handleAddTask = async (event: FormEvent<HTMLFormElement>) => {
        const data = new FormData(event.currentTarget);

        if (!data.get('taskname')) return;

        const newTask = {
            id: Date.now().toString(),
            taskBody: '',
            taskTitle: data.get('taskname') as string
        };

        await addTask({
            body: newTask,
            method: HTTP_METHODS.POST
        });

        (event.target as HTMLFormElement).reset();
    };

    return {handleAddTask};
};