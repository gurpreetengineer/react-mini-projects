import React, { useState, useEffect } from 'react';
import useCustomerContext from '../context/contextAPI';
import styled from 'styled-components';
import GlobalFont from './GlobalFonts';
import CustomerTable from './customer/CustomerTable';

function MainPage() {
	const [{ customersList }] = useCustomerContext();
	const [customerNewArray, setCustomerNewArray] = useState([]);

	// New object which has customer's data as well as their min/max bid.
	useEffect(() => {
		if (customersList) {
			customersList.map(customer => {
				setCustomerNewArray(prevCustomerNewArray => [...prevCustomerNewArray, {
					key: `${customer.id} ${customer.email}`,
					customer: customer,
					minBid: (customer.bids === null || customer.bids.length === 0) ? 0 : (customer.bids.length === 1 ? customer.bids[0].amount : [...Array(customer.bids.map(bid => bid.amount))][0].sort()[0]),
					maxBid: (customer.bids === null || customer.bids.length === 0) ? 0 : (customer.bids.length === 1 ? customer.bids[0].amount : [...Array(customer.bids.map(bid => bid.amount))][0].sort().reverse()[0]),
				}]);
			});
		}
	}, [customersList]);

	return (
		<MainPageContainer>
			<GlobalFont />
			<MainPageHeader> Customer Base </MainPageHeader>
			{customerNewArray && <CustomerTable customerNewArray={customerNewArray} />}
		</MainPageContainer>
	);
}

const MainPageContainer = styled.div`
	background-color: #50223C !important;
	font-family: ProductSans;
	height: 100vh;
	object-fit: contain;
	overflow: hidden !important;
  background-color: #F8F8F8;
  display: grid;
  place-items: center;
	color: white;
	overflow: scroll;
`;
const MainPageHeader = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	color: #F0DAC5 !important;
	margin-top: 27px;
	font-size: -webkit-xxx-large;
`;

export default MainPage;
