import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {TaskController} from 'Server/controllers/task/TaskController';
import nextConnect from 'Server/nextConnect';

import {errorHandler} from 'Server/utils/errorHandler';

export const getTaskList = TypedRoute(HTTP_METHODS.GET, TaskController.getTaskList);

export default nextConnect()
    .get(connectable(getTaskList))
    .handler({onError: errorHandler});

export const config = {
    api: {
        bodyParser: {sizeLimit: '50mb'},
        responseLimit: false
    }
};