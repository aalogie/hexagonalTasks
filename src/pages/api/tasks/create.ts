import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {TaskController} from 'Server/controllers/task/Task';
import nextConnect from 'Server/nextConnect';

import {errorHandler} from 'Server/utils/errorHandler';

export const createTask = TypedRoute(HTTP_METHODS.POST, TaskController.createTask);


export default nextConnect().post(connectable(createTask)).handler({onError: errorHandler});