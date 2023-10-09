import {useMutateRepository} from '@nfq/typed-next-api';

import TaskService from '../services/TaskService';

/**
 * This custom hook provides access to the `addTask` method from the Taskservice.
 *
 * @returns An object containing the `addTask` function.
 */
export const useAddTask = () => {
    const {trigger} = useMutateRepository<typeof TaskService.addTask>(
        'TaskList',
        TaskService.addTask,
        {revalidate: true}
    );

    return {addTask: trigger};
};