import { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const INITIAL_STATE = { darkMode: false };
const themeReducer = (state, action) => {

    switch (action.type) {
      

        default:
            return { darkMode: !state.darkMode };
    }

};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (

        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );


}
