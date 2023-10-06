import TaskService from '../services/TaskService';

/**
 * This custom hook provides access to the `getTasks` method from the Taskservice.
 *
 * @returns An array of the stored tasks.
 */
export const useGetTasks = () => ({getTasks: TaskService.getTasks});