import React, { createContext, useContext, useReducer } from 'react';
import propTypes from 'prop-types';

const CustomerContext = createContext();

const ContextProvider = ({ initialState, reducer, children }) => (
	<CustomerContext.Provider value={useReducer(reducer, initialState)} >
		{children}
	</CustomerContext.Provider>
);

const useCustomerContext = () => useContext(CustomerContext);

ContextProvider.propTypes = {
	initialState: propTypes.object,
	reducer: propTypes.func,
	children: propTypes.node
};

export default useCustomerContext;
export { CustomerContext, ContextProvider };

