import TaskService from '../services/TaskService';

/**
 * This custom hook provides access to the `deleteTask` method from the Taskservice.
 *
 * @returns Void.
 */
export const useDeleteTask = () => ({deleteTask: TaskService.deleteTask});