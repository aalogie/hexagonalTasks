import {Col, lighten, Row, Spacer} from '@nfq/react-grid';
import {m as motion} from 'framer-motion';
import styled from 'styled-components';

import {useTaskForm} from './useTaskForm';

/**
 * The `TaskForm` component is a React component responsible for rendering a form used to add new tasks.
 * It provides a user interface for entering the title of a new task and submitting it.
 * This component is typically used within a task management application to facilitate task creation.
 *
 * @returns The `TaskForm` component returns a JSX element representing the task creation form.
 * The form includes an input field for entering the task title and a submit button to add the task.
 * When the form is submitted, it triggers the `handleAddTask` function to add the new task.
 *
 * @example
 * ```tsx
 *   <TaskForm />
 * ```
 */
const TaskForm = () => {
    const {handleAddTask} = useTaskForm();

    return (
        <FormElement onSubmit={handleAddTask}>
            <Label htmlFor="taskname">New Task</Label>
            <Spacer y={2} />
            <Row hasNoGap>
                <Col>
                    <Input
                        id="taskname"
                        name="taskname"
                        type="text"
                    />
                </Col>
                <Col xs="max-content">
                    <Button
                        type="submit"
                        value="Add"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                    />
                </Col>
            </Row>
        </FormElement>
    );
};

export {TaskForm};

const FormElement = styled.form`
    font-family: ${({theme}) => theme.fonts.Lato};
    width: 100%;
`;

const Label = styled.label`
    display: none;
`;

const Input = styled.input`
    background-color: ${({theme}) => theme.colors.brandMain} ;
    border: none;
    font-size: 2rem;
    height: 4rem;
    outline: none;
    padding: 1rem;
    width: 100%;
`;

const Button = styled(motion.input)`
    background-color: ${({theme}) => lighten(theme.colors.brandMain, 30)};
    border: none;
    cursor: pointer;
    font-size: large;
    height: 4rem;
    min-width: 10rem;
`;