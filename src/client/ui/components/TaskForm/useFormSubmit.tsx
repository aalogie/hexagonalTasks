import type {FormEvent} from 'react';

interface ComponentProps {
    /**
     * The function that handles the submit event of the form.
     */
    onSubmit(e: FormEvent<HTMLFormElement>): void;
}

/**
 * The hook.
 *
 * @param onSubmit.onSubmit I dont understand the param shape here.
 * @param onSubmit          The handler function.
 * @returns * An object containing a single function, `handleAddTask`, which can be invoked to submit a new task.
 */
export const useFormSubmit = ({onSubmit}: ComponentProps) => {
    /**
     * This should go in its own custom hook.
     *
     * @param e This is the event.
     */
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
            onSubmit(e);
        }
    };

    return {handleOnSubmit};
};