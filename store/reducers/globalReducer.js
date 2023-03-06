import { TOOGLE_HEADER_STYLE } from "./../actions/actions";

const globalReducer = (state, action) => {
	switch (action) {
		case TOOGLE_HEADER_STYLE:
			return {
				...state,
				headerStyle: action.payload,
			};

		default:
			return state;
	}
};

export default globalReducer;
