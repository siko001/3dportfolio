import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';
import Spinner from './Spinner';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	gap: 50px;
	@media only screen and (max-width: 768px) {
		margin-top: 50px;
		width: 80%;
		display: block;
		left: 0;
	}
`;

const Left = styled.div`
	position: relative;
	left: 50px;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 768px) {
		margin-top: 50px;
		display: block;
		left: 0;
	}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Form = styled.form`
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	@media only screen and (max-width: 768px) {
		padding-top: 50px;
		width: 100%;
	}
`;

const Input = styled.input`
	background-color: #e8e6e6;
	padding: 20px;
	border: none;
	border-radius: 5px;
`;

const TextArea = styled.textarea`
	background-color: #e8e6e6;
	padding: 20px;
	border: none;
	border-radius: 5px;
`;

const Button = styled.button`
	background-color: #da4ea2;
	padding: 20px;
	border: none;
	border-radius: 5px;
	color: white;
	font-weight: bold;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	const [success, setSuccess] = useState(null);
	const [loading, setLoading] = useState(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isValid, setIsValid] = useState(false);
	const form = useRef();

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		// Update the state variables for name, email, and message
		if (name === 'name') {
			setName(value);
		} else if (name === 'email') {
			setEmail(value);
		} else if (name === 'message') {
			setMessage(value);
		}
		setIsValid(name !== '' && email !== '' && message !== '');
	};

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setSuccess(false);
	// 	}, 15000);
	// }, [success]);

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		// Check if all three fields are filled in and update isValid accordingly

		emailjs.sendForm('service_54oepka', 'template_coujz8t', form.current, 'vrA3AbOh39qz5-tva').then(
			(result) => {
				console.log(result.text);
				setSuccess(true);
				setLoading(false);
			},
			(error) => {
				console.log(error.text);
				setSuccess(false);
				setLoading(false);
			}
		);
	};

	return (
		<Section>
			<Container>
				<Left>
					<Form ref={form} onSubmit={handleSubmit}>
						<Title>Contact Us</Title>
						<Input placeholder="Name" name="name" value={name} onChange={handleInputChange} />
						<Input placeholder="Email" name="email" value={email} onChange={handleInputChange} />
						<TextArea
							placeholder="Write your message"
							name="message"
							value={message}
							onChange={handleInputChange}
							rows={10}
						></TextArea>
						<Button disabled={!isValid} type="submit">
							Send
						</Button>
						{loading && <Spinner />}
						{success && "Your message has been sent! we'll get back to you soon!"}
					</Form>
				</Left>
				<Right>
					<Map></Map>
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
