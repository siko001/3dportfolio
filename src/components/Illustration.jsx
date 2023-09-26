import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Mandelorian from './designs/Mandalorian';
import styled from 'styled-components';

const Desc = styled.div`
	font-weight: 500;
	font-size: 14px;
	width: 200px;
	padding: 15px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	color: black;
	top: 30px;
	right: -30px;
	opacity: 0;
	animation: fadeIn 3s ease-in forwards;
	-webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

	@media only screen and (max-width: 768px) {
		margin: 0 auto;
		top: 290px;
		right: 50px;
		text-align: center;
	}
	@media only screen and (max-height: 668px) {
		top: 290px;
		right: 30px;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		15% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const Illustration = () => {
	return (
		<>
			<Canvas className="canvass yoda" camera={{ position: [1, 0, 1] }}>
				<Stage intensity={0.000001}>
					<Mandelorian scale={0.08} />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>Master Yoda Approved Content</Desc>
		</>
	);
};

export default Illustration;
