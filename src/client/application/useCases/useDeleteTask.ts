import {useMutateRepository} from '@nfq/typed-next-api';

import TaskService from '../services/TaskService';

/**
 * This custom hook provides access to the `deleteTask` method from the Taskservice.
 *
 * @returns Void.
 */
export const useDeleteTask = () => {
    const {trigger} = useMutateRepository<typeof TaskService.deleteTaskById>(
        'TaskList',
        TaskService.deleteTaskById,
        {revalidate: true}
    );

    return {deleteTask: trigger};
};