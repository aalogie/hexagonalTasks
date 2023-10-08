import {HTTP_STATUS} from '@nfq/typed-next-api';

import {TaskService} from '../../services/TaskService';

import type {createTaskBody} from '../../services/TaskService';

/**
 *
 */
export class TaskController {
    /**
     * This method retrieves the task from database through the TaskService.
     *
     * @returns A promise that resolves to an object containing the enhanced boards and a status code.
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
    static async createTask(req: any, res: any, body: createTaskBody) {
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