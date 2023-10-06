import type {TaskAdapter} from 'Client/domain/adapters/TaskAdapter';
import {ITask} from 'Client/domain/entities/Tasks';

/**
 * TaskService class.
 *
 * This class implements the TaskAdapter interface and provides a method for retrieving the stored Tasks and another to add a new Task.
 * The 'getTasks' method returns an array containing the stored Tasks from localStorage.
 *
 * @implements {TaskAdapter}
 */
class TaskService implements TaskAdapter {
    /**
     * Retrieves the stored tasks.
     *
     * @returns An array containing the stored tasks.
     *
     * @example
     * ```ts
     * const taskService = new TaskService();
     * const storedTasks = taskService.getTasks();
     * ```
     */
    getTasks() {
        const JsonStoredTasks = localStorage.getItem('tasks');

        let storedTasks: ITask[];

        if (JsonStoredTasks) {
            storedTasks = JSON.parse(JsonStoredTasks) as ITask[];
        } else {
            storedTasks = [];
        }

        return storedTasks;
    }

    /**
     * Adds a new Task to the stored tasks.
     *
     * @example
     * ```ts
     * const taskService = new TaskService();
     * const storedTasks = taskService.addTask();
     * ```
     */
    addTask(newTask: ITask) {
        const JsonStoredTasks = localStorage.getItem('tasks');
        let storedTasks: ITask[];

        if (JsonStoredTasks) {
            storedTasks = JSON.parse(JsonStoredTasks) as ITask[];
        } else {
            storedTasks = [];
        }

        localStorage.setItem('tasks', JSON.stringify([newTask, ...storedTasks]));
    }

    /**
     * Deletes a specific task from the stored tasks.
     *
     * @example
     * ```ts
     * const taskService = new TaskService();
     * const storedTasks = taskService.deleteTask();
     * ```
     */
    deleteTask(id: string) {
        console.log(',,', id);

        const JsonStoredTasks = localStorage.getItem('tasks');
        let storedTasks: ITask[];

        if (JsonStoredTasks) {
            storedTasks = JSON.parse(JsonStoredTasks) as ITask[];
        } else {
            storedTasks = [];
        }

        const updatedTasks = storedTasks.filter((task: ITask) => task.id !== id);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
}

export default new TaskService();