/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 social.gltf --transform 
Files: social.gltf [9.55MB] > social-transformed.glb [1.72MB] (82%)
Author: Nurfaamk Cyform (https://sketchfab.com/nurhudaiffah)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/social-media-hologram-9f05052a90454e398d8e6704b9f780e4
Title: SOCIAL MEDIA HOLOGRAM
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('/social-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.polySurface24_lambert30_0.geometry} material={materials.lambert30} />
			<mesh geometry={nodes.polySurface25_lambert29_0.geometry} material={materials.lambert29} />
			<mesh geometry={nodes.polySurface16_aiStandardSurface1_0.geometry} material={materials.PaletteMaterial001} />
			<mesh geometry={nodes.polySurface20_lambert31_0.geometry} material={materials.lambert31} />
			<mesh
				geometry={nodes.polySurface13_lambert19_0.geometry}
				material={materials.lambert19}
				position={[0.158, 4.908, 3.57]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.241}
			/>
			<mesh
				geometry={nodes.polySurface1_lambert20_0.geometry}
				material={materials.lambert20}
				position={[0.208, 4.894, 3.297]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.241}
			/>
			<mesh
				geometry={nodes.polySurface6_lambert16_0.geometry}
				material={materials.PaletteMaterial002}
				position={[0.168, 4.908, 2.974]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.241}
			/>
			<mesh
				geometry={nodes.polySurface7_lambert18_0.geometry}
				material={materials.lambert18}
				position={[0.168, 4.908, 2.974]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.241}
			/>
			<mesh
				geometry={nodes.bevelPolygon8_lambert24_0.geometry}
				material={materials.PaletteMaterial003}
				position={[0.2, 5.827, 1.894]}
				rotation={[0, Math.PI / 2, 0]}
				scale={0.264}
			/>
		</group>
	);
}

useGLTF.preload('/social-transformed.glb');
