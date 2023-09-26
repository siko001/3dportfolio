import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Container = styled.div`
	padding: 10px 0;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media only screen and (max-width: 768px) {
		width: 100%;
		padding: 10px 20px;
	}
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const Logo = styled.img`
	height: 80px;
`;
const List = styled.ul`
	display: flex;
	gap: 20px;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
const ListItem = styled.li`
	list-style: none;
	cursor: pointer;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
const Icon = styled.img`
	height: 20px;
	padding: 5px;
	cursor: pointer;
`;
const Button = styled.a`
	padding: 10px 20px;
	background-color: #da4ea2;
	color: white;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	-webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	&:visited {
		text-decoration: none;
		color: white;
	}
`;

const Navbar = () => {
	return (
		<Section>
			<Container>
				<Links>
					<Logo src="./img/logo7.png" />
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Studio</ListItem>
						<ListItem>Works</ListItem>
						<ListItem>Contact</ListItem>
					</List>
				</Links>
				<Icons>
					<Icon src="./img/search.png" />
					<Button target="_blank" href="https://neilmallia.com">
						Hire Now
					</Button>
				</Icons>
			</Container>
		</Section>
	);
};

export default Navbar;
