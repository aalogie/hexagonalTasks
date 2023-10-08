import type {Dispatch, FormEvent, SetStateAction} from 'react';

import {HTTP_METHODS} from '@nfq/typed-next-api';

import {useAddTask} from 'Client/application/useCases/useAddTask';

import type {ITask} from 'Client/domain/entities/Tasks';

/**
 * Handles the Task Form data.
 *
 * @param setTasks The state setter function.
 * @returns The save handler function.
 */
export const useTaskForm = (setTasks: Dispatch<SetStateAction<ITask[]>>) => {
    const {addTask} = useAddTask();

    /**
     * This function handles the addition of an task.
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
        setTasks((prev: ITask[]) => [newTask, ...prev]);
        // event.currentTarget.reset();
    };

    return {handleAddTask};
};