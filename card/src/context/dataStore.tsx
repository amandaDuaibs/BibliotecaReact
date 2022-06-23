import React, {createContext, useReducer} from "react";
import { State, ContextProps, Covid} from "../components/interface";
import { datareducer } from "../components/datareducers";
import { options } from "../api/options";
import axios from "axios";
import { ActionTypes } from "../components/types";
//context
export const Context = createContext<Partial<ContextProps>>({});

//provider
export const StoreProvider: React.FC = props =>{
    const INITIAL_STATE: State= {
        covid_data: []
    }
    const [state,dispatch] = useReducer(datareducer, INITIAL_STATE);
    const getCovidData = async():Promise<void> => {
        try{
            const res = await axios.request<Covid[]>(options)
            dispatch({type: ActionTypes.GET_COVID_DATA, payload: res.data})
        }catch(error){
            console.log({error})
        }
    }
    const{covid_data}=state;
    return(
        <Context.Provider value={{covid_data, getCovidData}}>
            {props.children}
        </Context.Provider>
    )
}

export default StoreProvider;