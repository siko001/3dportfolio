import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Clothing from './designs/Clothing';
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
	top: 20px;
	right: 30px;
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

const ProductDesign = () => {
	return (
		<>
			<Canvas className="canvass" camera={{ position: [1, 0, 1] }}>
				<Stage intensity={0.000001}>
					<Clothing scale={0.08} />
				</Stage>
				<OrbitControls enableZoom={false} autoRotate />
			</Canvas>
			<Desc>Transforming Design Challenges into Cool Creative Adventures: Stress-Free, Every Time.</Desc>
		</>
	);
};

export default ProductDesign;
