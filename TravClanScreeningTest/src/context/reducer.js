const initialState = {
	listLoader: false,
	customersList: null,
};

const actionTypes = {
	FETCH_CUSTOMERS: 'FETCH_CUSTOMERS'
};

const reducer = (state, action) => {
	switch (action.type) {
	case actionTypes.FETCH_CUSTOMERS:
		return {
			...state,
			customersList: action.customersList
		};
	default:
		return state;
	}
};

export { initialState, actionTypes };
export default reducer;
