import React, { useRef } from 'react';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
	const textRef = useRef();
	useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4));
	return (
		<mesh>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="white">
				<RenderTexture attach="map">
					<PerspectiveCamera makeDefault position={[1, 1, 5]} />
					<color attach="background" args={['#d091c3']} />
					<Text ref={textRef} position={[1, 1, -12]} fontSize={4} color="#555">
						Rotate Me!
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
};

export default Cube;
