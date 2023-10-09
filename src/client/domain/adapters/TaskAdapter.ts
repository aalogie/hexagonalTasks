
import type {CreateTaskFormData} from '../entities/Task';
import type {ITask} from '../entities/Tasks';
import type {HTTP_METHODS, MutationRepoArgs} from '@nfq/typed-next-api';

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
    addTask(key: string, args: MutationRepoArgs<CreateTaskFormData, HTTP_METHODS.POST>): Promise<ITask | undefined>;

    /**
     * Deletes a specific task.
     *
     * @returns Void.
     */
    deleteTaskById(
        key: string,
        args: MutationRepoArgs<{id: string}, HTTP_METHODS.DELETE>
    ): Promise<string | undefined>;

    /**
     * Retrieves the stored tasks.
     *
     * @returns An Array of the stored tasks.
     */
    getTasks(): Promise<ITask[] | undefined>;
}