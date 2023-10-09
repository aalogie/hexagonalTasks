import {HTTP_STATUS} from '@nfq/typed-next-api';

import {TaskService} from '../../services/TaskService';

import type {CreateTaskBody} from '../../services/TaskService';
import type {NextApiRequest, NextApiResponse} from 'next';

/**
 *
 */
export class TaskController {
    /**
     * The `deleteTaskById` function is an asynchronous function that deletes a Task from the database using its ID.
     * It is designed to be used as a middleware in a Next.js API route. The function first checks if the request is authenticated by looking for a `frontifyApiKey` in the request object.
     * If the key is present, the function uses the `TaskService.deleteTaskById` method to delete the Task with the specified ID.
     * The function then returns a promise that resolves to an object containing the status code `HTTP_STATUS.OK` and the ID of the deleted Task.
     * If the `frontifyApiKey` is not present in the request object, the function returns a promise that resolves to an object containing the status code
     * `HTTP_STATUS.UNAUTHORIZED` and an error message.
     *
     * @param req      The Next.js API request object, which must be an authenticated request.
     * @param res      The Next.js API response object.
     * @param body     The body of the request, which is not used in this function.
     * @param query    The query parameters from the request, which must include the ID of the Task to be deleted.
     * @param query.id The ID of the Task to be deleted.
     * @returns A promise that resolves to an object containing the status of the operation and either the ID of the deleted Task or an error message.
     *
     * @example
     * ```tsx
     * const result = await TaskController.deleteTaskById(req, res, undefined, {id: 'TaskId'});
     * ```
     */
    static async deleteTaskById(
        req: NextApiRequest,
        res: NextApiResponse,
        body: undefined,
        query: {id: string}
    ) {
        try {
            await TaskService.deleteTaskById(query.id);

            return {
                data: query.id,
                status: HTTP_STATUS.OK
            };
        } catch (error) {
            return {
                message: 'Unauthorized',
                status: HTTP_STATUS.UNAUTHORIZED
            };
        }
    }

    /**
     * This method retrieves the tasks from database through the TaskService.
     *
     * @returns A promise that resolves to an object containing a list of the Tasks and a status code.
     *
     * @example
     * ```tsx
     * const tasks = await TaskController.getTaskList();
     * ```
     */
    static async getTaskList() {
        try {
            const tasks = await TaskService.getTaskList();

            return {
                data: tasks,
                status: HTTP_STATUS.OK
            };
        } catch (error) {
            return {
                message: 'Something went wrong',
                status: HTTP_STATUS.INTERNAL_SERVER_ERROR
            };
        }
    }

    /**
     * Creates a new task.
     *
     * This method creates a new task using the taskService.
     *
     * @param req  An authenticated API request.
     * @param res  A response object.
     * @param body An object containing the data for the new task.
     * @returns A promise that resolves to an object containing the newly created task and a status code.
     *
     * @example
     * ```tsx
     * const response = await taskController.createtask(req, res, body);
     * ```
     */
    static async createTask(req: any, res: any, body: CreateTaskBody) {
        try {
            const createdTask = await TaskService.createTask(body);

            return {
                data: createdTask,
                status: HTTP_STATUS.OK
            };
        } catch (error) {
            return {
                error,
                status: HTTP_STATUS.BAD_REQUEST
            };
        }
    }
}