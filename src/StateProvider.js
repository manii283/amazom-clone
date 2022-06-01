import { createContext, useContaxt, useReducer } from "react";

export const StartContext = createContext();

export const StateProvider = ({reducer, initialState, childern}) => (
    <StartContext.Provider value={useReducer(reducer, initialState)}>
        {childern}
    </StartContext.Provider>
);

export const useStateValue = () => useContaxt(StateContext);