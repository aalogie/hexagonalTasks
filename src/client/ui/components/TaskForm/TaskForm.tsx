import type {FormEvent} from 'react';

import {Col, Row, Spacer} from '@nfq/react-grid';
import styled from 'styled-components';

import {Button} from '../Button';
import {TextInput} from '../TextInput';

import type {WithOptionalChildren} from 'types/global';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The function that handles the submit event of the form.
     */
    onSubmit(e: FormEvent<HTMLFormElement>): void;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}


/**
 * The `TaskForm` component is a React component responsible for rendering a form used to add new tasks.
 * It provides a user interface for entering the title of a new task and submitting it.
 * This component is typically used within a task management application to facilitate task creation.
 *
 * @param props          The component props.
 * @param props.onSubmit The callback function triggered when the form is submitted.
 * @param props.testId   A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns The `TaskForm` component returns a JSX element representing the task creation form.
 * The form includes an input field for entering the task title and a submit button to add the task.
 * When the form is submitted, it triggers the `handleAddTask` function to add the new task.
 *
 * @example
 * ```tsx
 *   <TaskForm />
 * ```
 */
const TaskForm = ({onSubmit, testId}: WithOptionalChildren<ComponentProps>) => {
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

    return (
        <FormElement data-cy={testId} onSubmit={handleOnSubmit}>
            <Spacer y={2} />
            <Row hasNoGap>
                <Col>
                    <TextInput
                        name="taskname"
                        type="text"
                    />
                </Col>
                <Col xs="max-content">
                    <Button label="Add" />
                </Col>
            </Row>
        </FormElement>
    );
};

TaskForm.displayName = 'TaskForm';
TaskForm.defaultProps = {testId: 'TaskForm'};

export {TaskForm};

const FormElement = styled.form`
    /* font-family: ${({theme}) => theme.fonts.Lato}; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;

width: 100%;
`;