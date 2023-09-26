import React, { useState } from 'react';
import styled from 'styled-components';
import Illustration from './Illustration';
import Development from './Development';
import Inginuity from './Inginuity';
import SocialMedia from './SocialMedia';
import ProductDesign from './ProductDesign';

const data = ['Inovative Ingenuity', 'Product Design', 'Social Media', 'Development', 'Unique Illustrations'];

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	scroll-snap-align: center;
	width: 80%;
	display: flex;
	justify-content: space-between;
	position: relative;
	@media only screen and (max-width: 768px) {
		flex-direction: column;
		position: relative;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 768px) {
		text-align: center;
		justify-content: center;
		align-items: flex-start;
		margin-top: 35px;
		flex: 0.1;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ListItem = styled.li`
	font-size: 70px;
	font-weight: bold;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px white;
	position: relative;
	white-space: nowrap;

	@media only screen and (max-width: 768px) {
		font-size: 28px;
		color: white;
		-webkit-text-stroke: 0px;
	}
	&::after {
		content: '${(props) => props.text}';
		position: absolute;
		color: pink;
		width: 0;
		overflow: hidden;
		top: 0;
		left: 0;
		white-space: nowrap;
		@media only screen and (max-height: 768px) {
			left: 1px;
		}
	}
	&:hover {
		&::after {
			animation: display 0.8s linear both;

			@keyframes display {
				to {
					width: 100%;
				}
			}
			@media only screen and (max-height: 768px) {
				@keyframes display {
					from {
						width: 0%;
					}
					50% {
						width: 0%;
					}
					to {
						width: 100%;
					}
				}
			}
		}
	}
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	margin: 50px auto;
	@media only screen and (max-width: 768px) {
		justify-content: center;
		top: -50px;
		margin: 0 auto;
	}
`;

const Works = () => {
	const [work, setWork] = useState('Unique Illustrations');
	return (
		<Section>
			<Container>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem key={item} text={item} onClick={() => setWork(item)}>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>
					{work === 'Inovative Ingenuity' ? (
						<Inginuity />
					) : work === 'Development' ? (
						<Development />
					) : work === 'Social Media' ? (
						<SocialMedia />
					) : work === 'Product Design' ? (
						<ProductDesign />
					) : work === 'Unique Illustrations' ? (
						<Illustration />
					) : null}
				</Right>
			</Container>
		</Section>
	);
};

export default Works;
