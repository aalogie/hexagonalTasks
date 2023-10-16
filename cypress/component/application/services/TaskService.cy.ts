import {HTTP_METHODS} from '@nfq/typed-next-api';

import TaskService from 'Client/application/services/TaskService';

describe('TaskService', () => {
    context('getTasks', () => {
        it('fetches the tasks as an array', () => {
            const testArray = [
                {
                    body: '',
                    id: '0',
                    title: 'test0'
                },
                {
                    body: '',
                    id: '1',
                    title: 'test1'
                },
                {
                    body: '',
                    id: '2',
                    title: 'test2'
                }
            ];

            cy.intercept('/api/tasks', {body: testArray});
            cy.wrap(TaskService.getTasks()).should('be.deep.eq', [
                {
                    id: '0',
                    taskBody: '',
                    taskTitle: 'test0'
                },
                {
                    id: '1',
                    taskBody: '',
                    taskTitle: 'test1'
                },
                {
                    id: '2',
                    taskBody: '',
                    taskTitle: 'test2'
                }
            ]);
        });
    });

    context('addTask', () => {
        it('sends a new task request to the backend', () => {
            const ApiExpectedBody = {
                body: '',
                title: 'test'
            };

            cy.intercept('/api/tasks/create', {
                // we cut the request and respond with the following fake response:
                body: {
                    id: '0',
                    ...ApiExpectedBody
                }
            }).as('addTaskRequest');

            const FrontentExpectedBody = {
                id: '0',
                taskBody: '',
                taskTitle: 'test'
            };

            cy.wrap(TaskService.addTask('test-key', {
                arg: {
                    body: FrontentExpectedBody,
                    method: HTTP_METHODS.POST
                }
            })).should('be.deep.eq', FrontentExpectedBody);

            cy.wait('@addTaskRequest').its('request.body').should('be.deep.eq', ApiExpectedBody);
        });
    });

    context('delete Task by id', () => {
        it('sends a delete task request to API', () => {
            cy.intercept('/api/tasks/0a', {
                // we cut the request and respond with the following fake response:
                body: {id: '0a'}
            });

            cy.wrap(TaskService.deleteTaskById('test-key', {
                // this is to test this method in isolation of BE
                arg: {
                    body: {id: '0a'},
                    method: HTTP_METHODS.DELETE
                }
            })).should('be.eq', '0a');
        });
    });
});