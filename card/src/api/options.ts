import { OptionsProps } from "../components/interface";

export const options: OptionsProps = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/countries',
    params: {
        date: "2022-06-01",
        code: "Brazil"
    },
    headers: {
        'X-RapidAPI-Key': '085c3585fdmshc8b83aed3be6a2cp168519jsn6280c09469a4',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    },
   
};