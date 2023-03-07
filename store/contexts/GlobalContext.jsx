import { createContext, useContext } from "react";

const initStates = {
};

const Context = createContext(initStates);

export const GlobalProvider = ({ children }) => {
	const values = {
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const GlobalContext = () => {
	return useContext(Context);
};
