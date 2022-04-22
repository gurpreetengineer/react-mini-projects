import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import useCustomerContext from '../context/contextAPI';
import { useParams } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import StarsIcon from '@material-ui/icons/Stars';
import GavelIcon from '@material-ui/icons/Gavel';
import LinkIcon from '@material-ui/icons/Link';

function CustomerCard() {
	const [{ customersList }] = useCustomerContext();
	const [choosenCustomer, setChoosenCustomer] = useState(null);
	const [bids, setBids] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (customersList) {
			setChoosenCustomer(customersList.filter(customer => customer.id === id)[0]);
		}
	}, [customersList]);

	useEffect(() => {
		if (choosenCustomer) {
			// Generating random color codes to show different colors for various bids in 'Pie-chart'
			choosenCustomer.bids.map(customerBids => {
				setBids(prevBids => [...prevBids, {
					title: customerBids.carTitle,
					value: customerBids.amount,
					color: 'hsl(' + Math.random() * 360 + ', 90%, 55%)',
				}]);
			});
		}
	}, [choosenCustomer]);

	return (
		<CustomerCardContainer>
			{choosenCustomer &&
				(<Card>
					<PictureFrameContainer>
						<PictureFrame>
							<Picture src={choosenCustomer.avatarUrl} />
						</PictureFrame>
					</PictureFrameContainer>
					<DividerContainer>
						<Divider />
					</DividerContainer>
					<PersonalInfoContainer>
						<CustomerNameContainer>
							<CustomerName>{choosenCustomer.firstname} {choosenCustomer.lastname}</CustomerName>
						</CustomerNameContainer>
						<PersonalInfo>
							<table>
								<tbody>
									<SocialInfoContainer>
										<td><InfoHeading><MailIcon /></InfoHeading></td>
										<td><SocialLinks href={`mailto:${choosenCustomer.email}`}>{choosenCustomer.email}<LinkIcon /></SocialLinks></td>
									</SocialInfoContainer>
									<SocialInfoContainer>
										<td><InfoHeading><PhoneIcon /></InfoHeading></td>
										<td><SocialLinks href={`tel:${choosenCustomer.phone}`}>{choosenCustomer.phone}<LinkIcon /></SocialLinks></td>
									</SocialInfoContainer>
									<InfoContainer>
										<td><InfoHeading><StarsIcon /></InfoHeading></td>
										<td>{choosenCustomer.hasPremium ? <PremiumUserCell>Premium User</PremiumUserCell> : 'Normal User'}</td>
									</InfoContainer>
									<InfoContainer>
										<td><InfoHeading><GavelIcon /></InfoHeading></td>
										<td>{choosenCustomer.bids.length}</td>
									</InfoContainer>
								</tbody>
							</table>
						</PersonalInfo>

					</PersonalInfoContainer>
					{choosenCustomer.bids !== null && choosenCustomer.bids.length > 0 &&
						<>
							<DividerContainer>
								<Divider />
							</DividerContainer>
							<BidsContainer>
								<Bids>
									<PieChart
										data={bids}
										style={{ fontSize: '12px', width: '70%' }}
										labelStyle={{ fontSize: '6px', color: 'white' }}
										labelPosition='63'
										label={({ dataEntry }) => `${dataEntry.title},\n ${dataEntry.value}`}
										lineWidth="70"
									/>
								</Bids>
								<HelperMessage>Hover to see the Car title</HelperMessage>
							</BidsContainer>
						</>
					}
				</Card>
				)}
		</CustomerCardContainer>
	);
}

const CustomerCardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #50223C !important;
	height: 100vh;
	overflow: hidden;
`;
const Card = styled.div`
	display: flex;
	box-shadow: 0px 0px 26px black;
	width: 80%;
	min-height: 640px;
	max-height: 640px;
	background-color: #1C2340 !important;
`;
const PictureFrameContainer = styled.div`
	flex: 0.7;
	display:flex;
	align-items: center;
	margin-left: -170px;
`;
const DividerContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Divider = styled.div`
	height: 500px;
	border-right: 1px solid #86737366;
	display: flex;
	align-items: center;
`;
const PictureFrame = styled.div`
	box-shadow: -7px 0px 26px black;
	width: 350px;
	height: 350px;
	border-radius: 900px;
	display: flex;
	justify-content: center;
	align-items: center;
	object-fit: contain;
`;
const Picture = styled.img`
	width: 359px;
	background-color: black;
	border-radius: 999px;
	object-fit: contain;
`;
const PersonalInfoContainer = styled.div`
	flex: 1;
	color: white;
`;
const PersonalInfo = styled.div`
	margin: 100px;
`;
const SocialInfoContainer = styled.tr`
	display: flex;
	justify-content: flex-start;
	margin: 40px;
	align-items: center;

	&:hover {
		cursor: pointer;
		color: #F0DAC5;
		text-decoration: none;
	}
`;
const InfoContainer = styled.tr`
	display: flex;
	justify-content: flex-start;
	margin: 40px;
	font-size: 20px;
	align-items: center;
`;
const PremiumUserCell = styled.div`
	background-color: #bb860dbd;
	padding: 15px;
	border-radius: 90px;
`;
const CustomerNameContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px 0 -40px 0;
`;
const CustomerName = styled.h1`
	text-transform: capitalize;
	font-size: 48px;
`;
const InfoHeading = styled.div`
	margin: 0 40px;
	font-size: 20px;
`;
const SocialLinks = styled.a`
	font-size: 20px;
	text-decoration: none;
	color: white;
	display:flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		color: #F0DAC5;
		text-decoration: none;
	}
`;

const BidsContainer = styled.div`
	flex: 1;
	text-align: center;
	font-size: 15px;
	font-weight: 300;
`;
const Bids = styled.div`
	font-size: 12px;

	&:hover {
		cursor: pointer;
	}
`;
const HelperMessage = styled.label`
	color: #bdbdbd;
`;

CustomerCard.propTypes = {
	match: propTypes.object,
};

export default CustomerCard;
