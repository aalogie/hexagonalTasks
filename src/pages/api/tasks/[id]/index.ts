import {HTTP_METHODS, TypedRoute, connectable} from '@nfq/typed-next-api';
import {TaskController} from 'Server/controllers/task/Task';
import nextConnect from 'Server/nextConnect';

import {errorHandler} from 'Server/utils/errorHandler';

// export const getBoardById = TypedRoute(HTTP_METHODS.GET, BoardController.getBoardById);
// export const updateBoardData = TypedRoute(HTTP_METHODS.PATCH, BoardController.updateBoardData);
export const deleteTaskById = TypedRoute(HTTP_METHODS.DELETE, TaskController.deleteTaskById);

export default nextConnect()
    // .get(connectable(getBoardById))
    .delete(connectable(deleteTaskById))
    // .patch(connectable(updateBoardData))
    .handler({onError: errorHandler});

export const config = {
    api: {
        bodyParser: {sizeLimit: '50mb'},
        responseLimit: false
    }
};