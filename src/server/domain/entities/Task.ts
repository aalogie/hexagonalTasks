/**
 * `CreateTaskBody` is an interface that represents the structure of the payload for creating a new task.
 * It includes title and body of the newly created task.
 */
export interface CreateTaskBody {
    body?: string;
    title: string;
}