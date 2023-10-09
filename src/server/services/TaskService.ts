import {prisma} from 'Server/utils/prisma';

/**
 * `CreateTaskBody` is an interface that represents the structure of the payload for creating a new task.
 * It includes title and body of the newly created task.
 */
export interface CreateTaskBody {
    taskBody?: string;
    taskTitle: string;
}

/**
 * Service class for task-related operations.
 */
export class TaskService {
    /**
     * This method retrieves all task records from the database using prisma.
     *
     * @returns A promise that resolves to an array of all tasks.
     *
     * @example
     * ```tsx
     * const storedTasks = await taskService.getTaskList();
     * ```
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
    static async createTask(taskData: CreateTaskBody) {
        const task = await prisma.task.create({
            data: {
                body: taskData.taskBody,
                title: taskData.taskTitle
            }
        });

        return task;
    }


    /**
     * The `deleteTaskById` function is an asynchronous function that deletes a Task from the database using its ID.
     * The function uses the `prisma.task.delete` method to delete the Task. The `where` option is used to specify the ID of the Task to be deleted.
     * The function then returns the deleted Task.
     *
     * @param taskId The ID of the Task to be deleted.
     * @returns A promise that resolves to the deleted Task record.
     *
     * @example
     * ```tsx
     * const deletedTask = await deleteTaskById('taskId');
     * ```
     */
    static async deleteTaskById(taskId: string) {
        const task = await prisma.task.delete({where: {id: taskId}});

        return task;
    }
}