import React, { useState } from 'react';
import '../CSS/ContactMe.css';

import emailjs from 'emailjs-com'; // to get contacted via email

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';



const ContactMe = () => {
	// React Hooks
	const [ successMessage, setSuccessMessage ] = useState("");
	const { 
		register, 
		handleSubmit,
		formState: { errors } 
	} = useForm();

	const submitForm = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				email: data.email,
				subject: data.subject,
				message: data.message
			},
			userID
		)
		r.target.reset();
	}

	
	
	// Send Email
	const serviceID = "service_ID";
	const templateID = "template_ID";
	const userID = "user_InuEX6nkMo4QBdXcDOe1a";

	function sendEmail(serviceID, templateID, params, userID){

		emailjs.send(serviceID, templateID, params, userID)
			.then(() => {
				setSuccessMessage("Form sent successfully! I'll reach out to you as soon as possible");
			})
			.catch(error => console.error(`Something went wrong : ${error}`));
		
		// emailjs.send(serviceID, templateID, params, userID)
		// 	.then(() => {
		// 		console.log(result.text);
		// 	}, (error) => {
		// 		console.log(error.text);
		// 	});
	}



	return (
		<div id="contactme" className="ContactMe container-fluid pt-5">
			<div>
				<h1 className="section-heading">Contact Me</h1>
				<h4>Thanks for taking the time to reach me..</h4>
				<span className="success-message">{successMessage}</span>
			</div>

			<div className="contact-me-form container col-md-6 col-xs-12">
				<form onSubmit={handleSubmit(submitForm)}>
					<div className="row pt-3">
						<input type="text" id="name" className="cname form-control" name="name" placeholder="Name" 
							{...register('name', {
								required: "Please enter your Name",
								maxLength: {
									value: 20,
									message: "Name cannot be more than 20 characters"
								}
							})}
						/>
					</div>
					{/* <ErrorMessage className="error-message" errors={errors} name="name" /> */}
					<ErrorMessage errors={errors} name="name" render={({ message }) => <span className="error-message">{message}</span>}/>


					<div className="row pt-3">
						<input type="email" id="email" className="email form-control" name="email" placeholder="Email" 
							{...register('email', {
								required: "Please enter your Email",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid Email format"
								}
							})}
						/>
					</div>
					<ErrorMessage errors={errors} name="email" render={({ message }) => <span className="error-message">{message}</span>}/>


					<div className="row pt-3">
						<input type="text" id="subject" className="subject form-control" name="subject" placeholder="Subject" 
							{...register('subject', {
								required: "Please enter the Subject",
								maxLength: {
									value: 100,
									message: "Subject cannot be more than 100 characters"
								}
							})}
						/>
					</div>
					<ErrorMessage errors={errors} name="subject" render={({ message }) => <span className="error-message">{message}</span>}/>


					<div className="row pt-3">
						<textarea id="message" className="message" name="message" rows="4" placeholder="Message (Max 500 characters)"
							{...register('message', {
								required: "Please enter the Message",
								maxLength: {
									value: 500,
									message: "Message cannot be more than 500 characters"
								}
							})}
						></textarea>
					</div>
					<ErrorMessage errors={errors} name="message" render={({ message }) => <span className="error-message">{message}</span>}/>


					<div className="pt-5 pb-5">
						<button className="btn btn-success contact-me-btn fw-bold" type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactMe