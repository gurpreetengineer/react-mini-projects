/* eslint-disable no-empty-pattern */
import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import fetchCustomers from '../context/fetchCustomers';
import MainPage from '../components/MainPage';
import CustomerCard from '../components/CustomerCard';
import useCustomerContext from '../context/contextAPI';
import { actionTypes } from '../context/reducer';

function Routes() {
	const [{}, dispatch] = useCustomerContext();
	useEffect(() => {
		fetchCustomers().then(data => dispatch({
			type: actionTypes.FETCH_CUSTOMERS,
			customersList: data
		}));
	}, []);

	return (
		<Switch>
			<Route exact path='/' component={MainPage} />
			<Route exact path='/customer/:id' component={CustomerCard} />

			<Redirect from='*' to='/' />
		</Switch>
	);

}

export default Routes;
