import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

const CustomerRow = ({ id, avatar, name, email, phone, hasPremium, bids }) => {
	const history = useHistory();

	// on row click, push to this history's route
	const handleCustomerRoute = () => {
		history.push(`/customer/${id}`);
	};
	return (
		<CustomerRowContainer onClick={handleCustomerRoute}>
			<CustomerCellContainer style={{ padding: '10px 0 10px 100px', flex: 0.25 }}>
				<CustomerCell>
					<CustomerAvatar src={avatar} />
					<Cell>{name}</Cell>
				</CustomerCell>
			</CustomerCellContainer>
			<CustomerCellContainer>
				<Cell>{email}</Cell>
			</CustomerCellContainer>
			<CustomerCellContainer style={{ flex: 0.17 }}>
				<Cell>{phone}</Cell>
			</CustomerCellContainer>
			<CustomerCellContainer>
				<Cell>{hasPremium ? <PremiumUserCell>Premium User</PremiumUserCell> : 'Free User'}</Cell>
			</CustomerCellContainer>
			<CustomerCellContainer style={{ justifyContent: 'flex-end', marginRight: '10px', flex: 0.15 }}>
				{bids}
			</CustomerCellContainer>
		</CustomerRowContainer>
	);
};

const CustomerRowContainer = styled.div`
	display: flex;
	align-items: center;
	border-radius: 8px;
	justify-content: space-evenly;

	&:hover {
		background-color: #4e1d39;
		cursor: pointer;
	}
`;
const CustomerCellContainer = styled.div`
	display: flex;
	align-items:center;
	flex: 0.2;
`;
const CustomerAvatar = styled.img`
	width: 50px;
	object-fit: contain;
`;
const CustomerCell = styled.div`
	display: flex;
	align-items:center;
`;
const Cell = styled.div`
	padding: 4px;
`;
const PremiumUserCell = styled.div`
	background-color: #bb860dbd;
	padding: 15px;
	border-radius: 90px;
`;

CustomerRow.propTypes = {
	id: propTypes.string,
	avatar: propTypes.string,
	name: propTypes.string,
	email: propTypes.string,
	phone: propTypes.string,
	hasPremium: propTypes.bool,
	bids: propTypes.number
};

export default CustomerRow;
