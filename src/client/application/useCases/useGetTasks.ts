import {useRepository} from '@nfq/typed-next-api';

import TaskService from '../services/TaskService';

/**
 * This custom hook provides access to the `getTasks` method from the Taskservice.
 *
 * @returns An array of the stored tasks.
 */
export const useGetTasks = () => {
    const {data, error, isValidating} = useRepository<typeof TaskService.getTasks>(
        'TaskList',
        TaskService.getTasks
    );

    return {
        data,
        error,
        isValidating
    };
};