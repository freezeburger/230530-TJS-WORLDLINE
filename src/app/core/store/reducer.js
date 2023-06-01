import { ActionTypes } from "./action-types";


export const rootReducer = (state, action) => {
    console.log(action);

    if (![...Object.keys(ActionTypes), '@@INIT'].includes(action.type)) console.log(' Invalid Action Type ! ')

    // Différencier selon l'action;

    switch (action.type) {
        case ActionTypes.PRODUCT_LIST_UPDATE:
            return { ...state, products: action.payload };

        default:
            return state;
    }


}