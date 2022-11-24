import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
    articles: [],
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getArticles = async () => {
        const section = 'sports';
        const api_key = '1vZukSAhOVvA4beCvAzVNIZWnNJVdNWp';
        const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`);
        console.log(res);
        dispatch({
            type: "GET_ARTICLES",
            payload: res.data.results,
        });
    };

    return ( 
        <GlobalContext.Provider value = {
            {
                articles: state.articles,
                getArticles,
            }
        } >
            {children} 
        </GlobalContext.Provider>
    );

}