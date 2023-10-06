import type {ITask} from '../entities/Tasks';

/**
 * Interface for a Task adapter.
 *
 * This interface defines the contract for a Task adapter, which provides a method to fetch the stored tasks and another to add a new task.
 */
export interface TaskAdapter {
    /**
     * Stores the added task.
     *
     * @returns Void.
     */
    addTask(newTask: ITask): void;

    /**
     * Deletes a specific task.
     *
     * @returns Void.
     */
    deleteTask(id: string): void;

    /**
     * Retrieves the stored tasks.
     *
     * @returns An Array of the stored tasks.
     */
    getTasks(): ITask[];
}