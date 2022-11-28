import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
    articles: [],
    loading: false
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getArticles = async (section) => {
        dispatch({
            type: "LOADING"
        });
        const api_key = '1vZukSAhOVvA4beCvAzVNIZWnNJVdNWp';
        const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`);
        const localStorage_news = JSON.parse(localStorage.getItem('localStorage_news')) || [];
        dispatch({
            type: "GET_ARTICLES",
            payload: [...localStorage_news, ...res.data.results]
        });
    };

    return ( 
        <GlobalContext.Provider value = {
            {
                articles: state.articles,
                loading: state.loading,
                getArticles
            }
        } >
            {children} 
        </GlobalContext.Provider>
    );

}