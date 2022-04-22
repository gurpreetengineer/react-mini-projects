import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '../Pagination';

const CustomerTable = ({ customerNewArray }) => {
	const [toggleMinMax, setToggleMinMax] = useState(true);
	const [sortRows, setSortRows] = useState(false);

	const [columnNames] = useState([
		{ id: 1, name: 'Customer name (with avatar)' },
		{ id: 2, name: 'Email' },
		{ id: 3, name: 'Phone' },
		{ id: 4, name: 'Premium' },
		{ id: 5, name: 'Max/Min Bid' },
	]);

	// Checking for the min and max 'Bid' and sorting on behalf of min/max bid (RowSort functionality)
	useEffect(() => {
		if (customerNewArray) {
			if (toggleMinMax) {
				if (sortRows) {
					customerNewArray.sort((a, b) => b.maxBid - a.maxBid);
				} else {
					customerNewArray.sort((a, b) => a.maxBid - b.maxBid);
				}
			} else {
				if (sortRows) {
					customerNewArray.sort((a, b) => b.minBid - a.minBid);
				} else {
					customerNewArray.sort((a, b) => a.minBid - b.minBid);
				}
			}
		}
	}, [sortRows, customerNewArray]);

	return (
		<CustomerTableContainer>
			<TableHeaderColumn>
				{columnNames.map(columnName => (
					<ColumnContainer key={columnName.id}>
						{columnName.name === 'Max/Min Bid' ?
							<>
								<ColumnButtonDiv onClick={() => setToggleMinMax(!toggleMinMax)}>
									{toggleMinMax ? <> <SelectedBid>Max</SelectedBid>/Min </> : <> Max/<SelectedBid>Min</SelectedBid></>} Bid
								</ColumnButtonDiv>

								<ArrowButton onClick={() => setSortRows(!sortRows)}>
									{sortRows ? <ExpandLessIcon /> : <ExpandMoreIcon style={{ float: 'right' }} />}
								</ArrowButton>
							</> :
							<Column>{columnName.name}</Column>
						}
					</ColumnContainer>
				))}
			</TableHeaderColumn>
			<PaginationDiv>
				{/* Pagination Starts from here, so does the user's table */}
				<Pagination customerNewArray={customerNewArray} toggleMinMax={toggleMinMax} sortRows={sortRows} />
			</PaginationDiv>
		</CustomerTableContainer>
	);
};

const CustomerTableContainer = styled.div`
	background-color: #1C2340 !important;
	width: 75%;
	padding: 26px;
  text-align: center;
  background-color: white;
  border-radius: 10px;	
	box-shadow: 0 3px 24px #311224, 0 11px 13px #4e1d39;
	min-height: 486px;
	max-height: 770px;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: hidden;
		width: 0;
		background:transparent;
	}
`;
const TableHeaderColumn = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	border-radius: 9px;
	align-items: baseline !important;
	position: sticky;
	top: 0;
	background-color: #0b0e1b !important;
	padding: 22px 0;
`;
const ColumnContainer = styled.div`
	display: flex;
`;
const Column = styled.div``;
const ColumnButtonDiv = styled.div`
	font-family: ProductSans;
	background: inherit;
	border: none;
	color: white !important;

	&:hover {
		cursor: pointer;
	}
`;
const SelectedBid = styled.button`
	background-color: #50223C;
	font-family: ProductSans;
	color: white;
	border:none;
	padding: 3px;
`;
const ArrowButton = styled.button`
	background-color: inherit;
	border: none;
	color: white;
	padding: 0 16px;

	&:hover {
		background-color: #50223C;
		cursor: pointer;
	}
`;
const PaginationDiv = styled.div``;

CustomerTable.propTypes = {
	customerNewArray: propTypes.array,
};


export default CustomerTable;
