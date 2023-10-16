import {api} from '@nfq/typed-next-api';

import type {HTTP_METHODS, MutationRepoArgs} from '@nfq/typed-next-api';
import type {TaskAdapter} from 'Client/domain/adapters/TaskAdapter';
import type {CreateTaskFormData} from 'Client/domain/entities/Task';
import type {getTaskList} from 'src/pages/api/tasks';
import type {deleteTaskById} from 'src/pages/api/tasks/[id]';
import type {createTask} from 'src/pages/api/tasks/create';

/**
 * TaskService class.
 *
 * This class implements the TaskAdapter interface and provides methods for retrieving, adding and deleting tasks.
 *
 * @implements {TaskAdapter}
 */
class TaskService implements TaskAdapter {
    /**
     * Retrieves the stored tasks.
     *
     * @returns A promise that resolves to an array containing the stored tasks.
     *
     * @example
     * ```ts
     * const storedTasks = taskService.getTasks();
     * ```
     */
    async getTasks() {
        const data = await api<typeof getTaskList>('/api/tasks');

        return data?.map(task => ({
            id: task.id,
            taskBody: task.body,
            taskTitle: task.title
        }));
    }

    /**
     * Adds a new Task to the stored tasks.
     *
     * @param key The key used by the SWR cache.
     * @param arg An object containing the form data and the HTTP method.
     * @returns A promise that resolves to the new task data, or undefined if the API request fails.
     *
     * @example
     * ```ts
     * const storedTasks = taskService.addTask();
     * ```
     */
    async addTask(key: string, {arg: {body, method}}: MutationRepoArgs<CreateTaskFormData, HTTP_METHODS.POST>) {
        const data = await api<typeof createTask>('/api/tasks/create', {
            body: {
                body: body.taskBody,
                title: body.taskTitle
            },
            method
        });

        if (data) {
            return {
                id: data.id,
                taskBody: data.body,
                taskTitle: data.title
            };
        }

        return undefined;
    }

    /**
     * Deletes a specific task from the stored tasks.
     *
     * @example
     * ```ts
     * const deletedTask = taskService.deleteTaskById();
     * ```
     */
    async deleteTaskById(key: string, {arg: {body, method}}: MutationRepoArgs<{id: string}, HTTP_METHODS.DELETE>) {
        const data = await api<typeof deleteTaskById>(`/api/tasks/${body.id}`, {method});

        return data?.id;
    }
}

export default new TaskService();