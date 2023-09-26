import React from 'react';

import Cube from './designs/Cube';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Container = styled.div`
	height: 100vh;
	margin: 0 auto;
	width: 80%;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 768px) {
		align-items: flex-start;
	}
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
const Title = styled.h1`
	font-size: 64px;
`;
const WhatWeDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const Line = styled.img`
	height: 5px;
`;
const Subtitle = styled.h2`
	color: #da4ea2;
`;
const Desc = styled.p`
	font-size: 24px;
	color: lightgrey;
`;
const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	-webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	flex: 1;
	@media only screen and (max-width: 768px) {
		margin-top: 30px;
		align-items: center;
		text-align: center;
		gap: 30px;
	}
`;

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>
					<Canvas camera={{ fov: 12, position: [5, 5, 5] }} style={{ height: '400px' }}>
						<OrbitControls enableZoom={false} autoRotate={true} />
						<ambientLight intensity={0.3} />
						<directionalLight position={[3, 2, 1]} />
						<Cube></Cube>
					</Canvas>
				</Left>
				<Right>
					<Title>Think outside the square space.</Title>
					<WhatWeDo>
						<Line src="./img/line.png" />
						<Subtitle>Who we are</Subtitle>
					</WhatWeDo>
					<Desc>A creative team of designers and developers with a passion for the arts.</Desc>
					<Button>See our work</Button>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
