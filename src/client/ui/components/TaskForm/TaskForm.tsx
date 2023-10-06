'use client';

import type {Dispatch, SetStateAction} from 'react';

import {Col, Row, Spacer} from '@nfq/react-grid';
import styled from 'styled-components';

import {useTaskForm} from './useTaskForm';

import type {ITask} from 'Client/domain/entities/Tasks';


interface ComponentProps {
    setTasks: Dispatch<SetStateAction<ITask[]>>;
}

/**
 * TaskForm.
 *
 * @param props          The component props.
 * @param props.setTasks The setter function of the tasks array.
 * @returns The TaskForm component.
 */
const TaskForm = ({setTasks}: ComponentProps) => {
    const {handleAddTask} = useTaskForm(setTasks);

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
                    <Button type="submit" value="Add" />
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

const Button = styled.input`
    border: none;
    cursor: pointer;
    font-size: large;
    height: 4rem;
    min-width: 10rem;
`;