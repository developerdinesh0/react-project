import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Includes/Header';
import Footer from '../../Components/Includes/Footer';

import Input from '../../Components/UI/Input';
import Validations from '../../Components/Utility/Validations';


class Login extends React.Component {

	form_props = {
		login_form:{
			email:{
				element_type: "input",
				element_config: {
					type: 'text',
					placeholder: 'Email Address',
				},
				label: 'Email Address',
				value: '',
				validations: {
					required: true,
					email: true,
				},
				valid: true,
				error_msg: '',
			},
			password:{
				element_type: 'input',
				element_config: {
					type: 'password',
					placeholder: 'Password',
				},
				label: 'Password',
				value: '',
				validations: {
					required: true,
					min_length: 8,
				},
				valid: true,
				error_msg: '',
			}
		},
		is_form_valid: false,
	}

	inputChangeHandler(event, identifier){		
		event.preventDefault();
		
		const update_login_form = this.form_props.login_form;
		const form_element = update_login_form[identifier];
		form_element.value = event.target.value;
		let validate_element = Validations(
			form_element.value,
			form_element.validations
		);
		form_element.valid = validate_element.valid;
		form_element.error_msg = validate_element.error_msg;
		update_login_form[identifier] = form_element;

		let is_form_valid = true;
		for (let identifier in update_login_form) {
			is_form_valid = update_login_form[identifier].valid && is_form_valid;
		}
		this.setState({
			login_form: update_login_form,
			is_form_valid: is_form_valid,
		}); 
	}
	loginSubmitHandler = (event) => {
		event.preventDefault();
		let is_form_valid = true;
		if (!this.form_props.is_form_valid) {
			const update_login_form = { ...this.form_props.login_form };
			for(let key in update_login_form){
				let form_element = update_login_form[key];
				if (form_element.validations.required && form_element.value.trim() === '') {
					is_form_valid = false;
					form_element.valid = false;
					form_element.error_msg = 'This field is required!';
				}
				update_login_form[key] = form_element;
			}
			this.setState({
				is_form_valid: is_form_valid,
				login_form: update_login_form,
			});
		}
		if (this.form_props.is_form_valid) {
			this.props.onLogin(
				this.form_props.login_form.email.value,
				this.form_props.login_form.password.value
			);
		}
	}

	render() {
		let form_elements = [];
		for (let key in this.form_props.login_form) {
			form_elements.push({ id: key, config: this.form_props.login_form[key] });
		}
		return(
			<React.Fragment>
				<Header lightText='Welcome to' boldText='New Dwarka - Los Angles' />
				<div className='main_wrap_content'>
					<div className='container'>
						<h4>Please sign in to your account to continue..</h4>
						<form className='float-label' onSubmit={this.loginSubmitHandler}>
							{form_elements.map((element) => (
								<Input
									key={element.id}
									element_type={element.config.element_type}
									element_config={element.config.element_config}
									value={element.config.value}
									label={element.config.label}
									changed={(event) =>
										this.inputChangeHandler(event, element.id)
									}
									valid={element.config.valid}
									error_msg={element.config.error_msg}
								/>
							))}
							<div className='forgot_link'>
								<Link to='forgot-password'>Forgot Password?</Link>
							</div>
							<div className='submit_btn'>
								<button type='submit' className='btn signin_btn'>Sign In</button>
							</div>
						</form>
					</div>
				</div>
				<Footer linkText="Don't have an account?" pageName='register' />
			</React.Fragment>
		)
	}
}
export default Login;