import { ActionTypes } from "./action-types";
import {getData, data} from '../services/service';


export const rootMiddleware = (store) => (next) => (action) => {

    console.log('From middleware', action) ;

    if (action.type === ActionTypes.PRODUCT_LIST_REQUEST){

        getData().then(() => next({type:ActionTypes.PRODUCT_LIST_UPDATE, payload:data }))
    
    }

    next(action);

}