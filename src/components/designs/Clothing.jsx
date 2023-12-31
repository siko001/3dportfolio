/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 clothing.gltf --transform 
Files: clothing.gltf [253.34MB] > clothing-transformed.glb [4.35MB] (98%)
Author: Kaan Tezcan (https://sketchfab.com/kaanpirate)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-armor-clothing-2707c5a2601244daa4226357e63c4f76
Title: Sci-Fi Armor Clothing
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
	const { nodes, materials } = useGLTF('/clothing-transformed.glb');
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Cloth_Cloth_0.geometry} material={materials.Cloth} scale={0.01} />
			<mesh geometry={nodes.Cloth1_1_Cloth1_1_0.geometry} material={materials.Cloth1_1} scale={0.01} />
			<mesh geometry={nodes.Cloth1_Cloth1_0.geometry} material={materials.Cloth1} scale={0.01} />
		</group>
	);
}

useGLTF.preload('/clothing-transformed.glb');
