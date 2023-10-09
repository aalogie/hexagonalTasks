import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {TaskController} from 'Server/controllers/task/Task';
import nextConnect from 'Server/nextConnect';

import {errorHandler} from 'Server/utils/errorHandler';

export const deleteTaskById = TypedRoute(HTTP_METHODS.DELETE, TaskController.deleteTaskById);

export default nextConnect()
    .delete(connectable(deleteTaskById))
    .handler({onError: errorHandler});

export const config = {
    api: {
        bodyParser: {sizeLimit: '50mb'},
        responseLimit: false
    }
};