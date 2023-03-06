import { createContext, useContext, useEffect, useReducer } from "react";
import { TOOGLE_HEADER_STYLE } from "../actions/actions";
import globalReducer from "./../reducers/globalReducer";

const initStates = {
	headerStyle: "transparent" || "normal",
};

const Context = createContext(initStates);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, initStates);

	useEffect(() => {
		if (window) {
			window.addEventListener("scroll", () => {
				if (window.scrollY > 129) {
					dispatch({
						type: TOOGLE_HEADER_STYLE,
						payload: "normal",
					});
				} else {
					dispatch({
						type: TOOGLE_HEADER_STYLE,
						payload: "transparent",
					});
				}
			});
		}

		return () => {
			window.removeEventListener("scroll", () => null);
		};
	}, []);

	const values = {
		headerStyle: state.headerStyle,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const GlobalContext = () => {
	return useContext(Context);
};
