/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CustomerComponent from './customer/CustomerComponent';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function Pagination({ customerNewArray, toggleMinMax, sortRows }) {
	const classes = useStyles();

	const [noOfRows, setNoOfRows] = useState(5);
	const [paginatedCustomerData, setPaginatedCustomerData] = useState(customerNewArray);
	const [initialPageIndex, setInitialPageIndex] = useState(0);
	const [finalPageIndex, setFinalPageIndex] = useState(noOfRows);
	const [noOfPagesArray, setNoOfPagesArray] = useState([]);
	const [pageNumber, setPageNumber] = useState(2);

	// Creating an array for no. of pages
	useEffect(() => {
		setNoOfPagesArray([]);
		for (let i = 1; i <= Math.ceil(customerNewArray.length / noOfRows); i++) {
			setNoOfPagesArray(prevNoOfPagesArray => [...prevNoOfPagesArray, i]);
		}
		//Updating last index
	}, [customerNewArray, noOfRows]);

	// Assigning a new object to show data
	useEffect(() => {
		//without this sorting rowSort arrow wasn't working properly
		// console.log('', paginatedCustomerData);
		setPaginatedCustomerData(customerNewArray.slice(initialPageIndex, finalPageIndex));
	}, [customerNewArray, initialPageIndex, finalPageIndex, sortRows]);

	// if we are on another page and we select different 'no. of rows', this will handle the changes
	// and take you on the 1st page.
	useEffect(() => {
		setInitialPageIndex(0);
		setFinalPageIndex(noOfRows);
	}, [noOfRows]);

	const handlePrev = () => {
		if (initialPageIndex > 1) {
			// no. of rows = finalPageIndex - initialPageIndex
			setInitialPageIndex(initialPageIndex - noOfRows);
			setFinalPageIndex(finalPageIndex - noOfRows);
		}
		if (pageNumber > 2) {
			setPageNumber(pageNumber - 1);
		}
	};
	const handleNext = () => {
		// should be less than customer object length
		if (finalPageIndex < customerNewArray.length) {
			setInitialPageIndex(initialPageIndex + noOfRows);
			setFinalPageIndex(finalPageIndex + noOfRows);
		}
		if (pageNumber <= noOfPagesArray.length) {
			setPageNumber(pageNumber + 1);
		}
	};

	const handlePageOnClick = (pageNo) => {
		if (pageNo === 1) {
			setInitialPageIndex(0);
			setFinalPageIndex(noOfRows);
		} else {
			setInitialPageIndex(noOfRows * (pageNo - 1));
			setFinalPageIndex(noOfRows * pageNo);
		}
		setPageNumber(pageNo + 1);
	};

	return (
		<PaginationContainer>
			{customerNewArray && customerNewArray.slice(initialPageIndex, finalPageIndex).map(customerNew => (
				<CustomerComponent key={customerNew.key} customerNew={customerNew.customer} minBid={customerNew.minBid} maxBid={customerNew.maxBid} toggleMinMax={toggleMinMax} />
			))}
			<PaginationFooter>
				<PaginationRowLimit>
					{/* Material UI component */}
					<FormControl className={classes.formControl}>
						<StyledInputLabel htmlFor="uncontrolled-native">No. of Rows</StyledInputLabel>
						<NativeSelect
							style={{ color: '#F0DAC5' }}
							defaultValue={5}
							onChange={event => setNoOfRows(event.target.value)}
							inputProps={{
								name: 'name',
								id: 'uncontrolled-native',
							}}
						>
							<StyledOption value={5}>5</StyledOption>
							<StyledOption value={10}>10</StyledOption>
							<StyledOption value={15}>15</StyledOption>
							<StyledOption value={20}>20</StyledOption>
						</NativeSelect>
					</FormControl>
				</PaginationRowLimit>
				<PaginationButtonContainer pageNumber={pageNumber}>
					<PaginationButton onClick={handlePrev}>Prev</PaginationButton>
					{noOfPagesArray.map(pageNo => (
						<NumberButtons key={pageNo} value={pageNo} onClick={() => handlePageOnClick(pageNo)}>{pageNo}</NumberButtons>
					))}
					<PaginationButton onClick={handleNext}>Next</PaginationButton>
				</PaginationButtonContainer>
			</PaginationFooter>
		</PaginationContainer>
	);
}

const PaginationContainer = styled.div``;
const PaginationFooter = styled.div`
	position: sticky;
	bottom: 0;
	width: 100%;
	background: #0b0e1b !important;	
	height: 76px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PaginationButton = styled.button`
	background-color: #F0DAC5;
	border: none;
	color: #0b0e1b;
	font-size: 17px;
	padding: 10px 25px;
	border-radius: 3px;
	margin: 2px 5px;

	&:hover {
		cursor: pointer;
	}
`;
const PaginationRowLimit = styled.div`
	background-color: #50223C !important;
	border-radius: 3px;
	margin-left: 7px;
`;

const StyledInputLabel = styled(InputLabel)`
	color: #F0DAC5 !important;
`;
const StyledOption = styled.option`
	background-color: #50223C !important;
	border: none;
	color: #F0DAC5 !important;
`;

const NumberButtons = styled.button`
	background-color: #F0DAC5;
	border: none;
	color: #0b0e1b;
	font-size: 17px;
	padding: 10px 15px;
	border-radius: 99px;
	margin: 2px 5px;

	&:hover {
		cursor: pointer;
	}
	&:focus {
		background-color: #9a8774;
		color: #F0DAC5;
	}
`;

const PaginationButtonContainer = styled.div`
	button:nth-child(${props => props.pageNumber}){
		background-color: #9a8774;
		color: #F0DAC5;
	}
`;
Pagination.propTypes = {
	customerNewArray: propTypes.array,
	toggleMinMax: propTypes.bool,
	sortRows: propTypes.bool
};

export default memo(Pagination);
