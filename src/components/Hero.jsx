import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './main.css';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 768px) {
		height: 170vh;
	}
`;
const Container = styled.div`
	position: relative;
	height: 100vh;
	margin: 0 auto;
	width: 80%;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		gap: 30px;
	}
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	flex: 2;
	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
		padding: 50px;
	}
`;
const Title = styled.h1`
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		text-align: center;
	}
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
	@media only screen and (max-width: 768px) {
		padding: 15px;
		text-align: center;
	}
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
	-webkit-box-shadow: -10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: -10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Right = styled.div`
	position: relative;
	flex: 3;
	@media only screen and (max-width: 768px) {
		flex: 1;
		width: 100%;
	}
`;
const Img = styled.img`
	width: 700px;
	height: 500px;
	object-fit: contain;
	animation: animate 2s infinite ease alternate;
	@media only screen and (max-width: 768px) {
		width: 100%;
		height: 300px;
	}

	@keyframes animate {
		to {
			transform: translateY(-20px);
		}
	}
`;

const Hero = () => {
	return (
		<Section>
			<Navbar />
			<Container>
				<Left>
					<Title>Think. Make. Solve.</Title>
					<WhatWeDo>
						<Line src="./img/line.png" />
						<Subtitle>What We Do</Subtitle>
					</WhatWeDo>
					<Desc>we enjoy creating delightful, human-centered digital experiences!</Desc>
					<Button>Learn More..</Button>
				</Left>
				<Right>
					<Canvas
						className="canvas"
						camera={{ fov: 28 }}
						style={{ height: '620px', position: 'absolute', left: '0', top: '-40px' }}
					>
						<OrbitControls enableZoom={false} autoRotate={true} />
						<ambientLight intensity={0.3} />
						<directionalLight position={[3, 2, 1]} />
						<Sphere args={[1, 100, 200]} scal={10}>
							<MeshDistortMaterial color="#592f79" attach="material" distort={0.5} speed={2} />
						</Sphere>
					</Canvas>
					<Img src="./img/moon.png" />
				</Right>
			</Container>
		</Section>
	);
};

export default Hero;
