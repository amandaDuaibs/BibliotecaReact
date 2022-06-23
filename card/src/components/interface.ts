import { ActionTypes } from "./types";
import {Method} from 'axios'

export interface Covid{
    country: string,
    provinces:[
        {
            province:string,
            confirmed: number,
            recovered: number, 
            deaths: number,
            active: 0
        }
    ],
    latitude: number,
    longitude: number,
    date: Date,

}

export interface ButtonProps{
    text:string,
    id: string,
    action(): void
}

export interface CardProps {
    province:string,
    confirmed: number,
    recovered: number, 
    deaths: number,
    active: 0
}

export interface State {
    covid_data: Covid[]
}

export interface ContextProps{
    covid_data: Covid[]
    getCovidData(): Promise<void>
}
export interface ActionProps{
    type: 'GET_COVID_DATA',
    payload: Covid[]
}
export interface OptionsProps{
   method: Method,
   url: string,
   params:{
    date: string,
    code: string
   },
   headers:{
    'X-RapidAPI-Key':string,
    'X-RapidAPI-Host':string
   }
}
