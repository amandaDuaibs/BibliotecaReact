import { State, ActionProps } from "./interface";
import { ActionTypes } from "./types";

export const datareducer = (state:State, action:ActionProps):State => {
    const {type, payload} = action;
    switch (type){
        case ActionTypes.GET_COVID_DATA:
            return {...state, covid_data:payload}
        default:
            return state;
    }
}