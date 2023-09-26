import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from 'react-simple-maps';

const Map = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-10.0, -52.0, 0],
				center: [5, -10],
				scale: 1400,
			}}
			style={{ width: '100%', height: '100%' }}
		>
			<Geographies geography="/features.json" fill="#2C065D" stroke="#FFFFFF" strokeWidth={0.5}>
				{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
			</Geographies>
			<Annotation
				subject={[14.1, 396]}
				dx={-150}
				dy={-100}
				connectorProps={{
					stroke: 'white',
					strokeWidth: 2,
					strokeLinecap: 'round',
				}}
			>
				<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
					{'Malta'}
				</text>
			</Annotation>
			<Annotation
				subject={[25, 402.5]}
				dx={100}
				dy={-60}
				connectorProps={{
					stroke: 'white',
					strokeWidth: 2,
					strokeLinecap: 'round',
				}}
			>
				<text x="68" textAnchor="end" alignmentBaseline="middle" fill="white">
					{'Bulgaria'}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;
