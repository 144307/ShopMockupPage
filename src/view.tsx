import React, { createContext, useReducer } from "react";

// 1. Create a context
const AppContext = createContext();

// 2. Define your initial state
const initialState = {
  cart: [],
  user: null,
};

// 3. Create a reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// 4. Create a provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// 5. Export the context, provider, and reducer
export { AppContext, AppProvider, appReducer };
