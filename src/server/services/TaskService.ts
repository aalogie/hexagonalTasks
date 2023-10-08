import {prisma} from 'Server/utils/prisma';

export interface createTaskBody {
    taskBody?: string;
    taskTitle: string;
}

/**
 *
 */
export class TaskService {
    /**
     * This method retrieves all task records from the database using prisma.
     *
     * @returns A promise that resolves to an array of all tasks.
     */
    static async getTaskList() {
        const tasks = await prisma.task.findMany();

        return tasks;
    }

    /**
     * Creates a new task.
     *
     * This function takes a data object for the new task, and creates a new task in the database.
     *
     * @param taskData An object containing the data for the new task.
     * @returns A promise that resolves to the newly created task record.
     *
     * @example
     * ```tsx
     * const newtask = await taskService.createTask(taskData);
     * ```
     */
    static async createTask(taskData: createTaskBody) {
        const task = await prisma.task.create({
            data: {
                body: taskData.taskBody,
                title: taskData.taskTitle
            }
        });

        return task;
    }
}