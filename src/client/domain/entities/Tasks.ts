/**
 * Interface for the task.
 */
export interface ITask {
    /**
     * The id of the task.
     */
    id: string;
    /**
     * The content of the task.
     */
    taskBody: string | null;
    /**
     * The name of the task.
     */
    taskTitle: string;
}