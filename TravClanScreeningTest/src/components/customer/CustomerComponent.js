import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CustomerRow from './CustomerRow';

function CustomerComponent({ customerNew, minBid, maxBid, toggleMinMax }) {
	return (
		<CustomerComponentContainer>
			<CustomerRow key={customerNew.id} id={customerNew.id} avatar={customerNew.avatarUrl} name={`${customerNew.firstname} ${customerNew.lastname}`} email={customerNew.email} phone={customerNew.phone} hasPremium={customerNew.hasPremium} bids={toggleMinMax ? maxBid : minBid} />
		</CustomerComponentContainer>
	);
}

const CustomerComponentContainer = styled.div``;

CustomerComponent.propTypes = {
	customerNew: propTypes.object,
	minBid: propTypes.number,
	maxBid: propTypes.number,
	toggleMinMax: propTypes.bool
};
export default CustomerComponent;
