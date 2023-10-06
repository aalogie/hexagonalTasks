import TaskService from '../services/TaskService';

/**
 * This custom hook provides access to the `addTask` method from the Taskservice.
 *
 * @returns Void.
 */
export const useAddTask = () => ({addTask: TaskService.addTask});