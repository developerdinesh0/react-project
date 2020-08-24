import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Header from '../../Components/Includes/Header';
import Footer from '../../Components/Includes/Footer';

import Input from "../../Components/UI/Input";
import Loader from '../../Components/Utility/Loader';
import Validations from "../../Components/Utility/Validations";

import * as actions from '../../actions/index';

class Register extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			loader: null,
			register_error: null,
		}
	}
	form_prop = {
	    register_form: {
	        full_name: {
	            element_type: "input",
	            element_config: {
	                type: "text",
	                placeholder: "Full Name",
	            },
	            label: "Full Name",
	            value: "",
	            validations: {
	                required: true,
	            },
	            valid: true,
	            error_msg: "",
	        },
	        email: {
	            element_type: "input",
	            element_config: {
	                type: "text",
	                placeholder: "Email Address",
	            },
	            label: "Email Address",
	            value: "",
	            validations: {
	                required: true,
	                email: true,
	            },
	            valid: true,
	            error_msg: "",
	        },
	        password: {
	            element_type: "input",
	            element_config: {
	                type: "password",
	                placeholder: "Password",
	            },
	            label: "Password",
	            value: "",
	            validations: {
	                required: true,
	                min_length: 8,
	            },
	            valid: true,
	            error_msg: "",
	        },
	    },
	    is_form_valid: false,
	}

	inputChangeHandler (event, identifier){
		event.preventDefault();
		const update_register_form = this.form_prop.register_form;
		const form_element = update_register_form[identifier];
		form_element.value = event.target.value;
		let validate_element = Validations(
			form_element.value,
			form_element.validations
		);
		form_element.valid = validate_element.valid;
		form_element.error_msg = validate_element.error_msg;
		update_register_form[identifier] = form_element
	    let is_form_valid = true;
	    for (let identifier in update_register_form) {
	      is_form_valid = update_register_form[identifier].valid && is_form_valid;
	    }
	    this.setState({
	      register_form: update_register_form,
	      is_form_valid: is_form_valid
	    });		
	}

	registerSubmitHandler = (event) => {
		event.preventDefault();
		let is_form_valid = true;
		if(!this.form_prop.is_form_valid){
			const update_register_form = this.form_prop.register_form;
			for(let key in update_register_form){
				let form_element = update_register_form[key]
				if(form_element.validations.required && form_element.value.trim() === ""){
		          is_form_valid = false;
		          form_element.valid = false;
		          form_element.error_msg = "This field is required!";
				}
				update_register_form[key] = form_element;
			}
		    this.setState({
		      register_form: update_register_form,
		      is_form_valid: is_form_valid
		    });
		}

	    if (is_form_valid) {
	      const form_data = {};
	      for (let key in this.form_prop.register_form) {
	        form_data[key] = this.form_prop.register_form[key].value;
	      }
	      this.props.onSignUp(form_data);			
	    }


	}

	render() {
		const { register_error, loader } = this.props;
		let form_elements = [];
		for(let key in this.form_prop.register_form){
			form_elements.push({ id: key, config: this.form_prop.register_form[key] });			
		}
		return(
			<React.Fragment>
				<Header lightText="Welcome to" boldText="New Dwarka - Los Angles" />

					<div className="main_wrap_content">
						<div className="container-fluid">
							<div className="register_form">
								<form className="float-label" onSubmit={this.registerSubmitHandler} >
					                {form_elements.map(element => (
					                  <Input
					                    key={element.id}
					                    element_type={element.config.element_type}
					                    element_config={element.config.element_config}
					                    value={element.config.value}
					                    label={element.config.label}
					                    changed={event =>
					                      this.inputChangeHandler(event, element.id)}
					                    valid={element.config.valid}
					                    error_msg={element.config.error_msg}
					                  />
					                ))}
									{loader ? <Loader /> : null}
									<div className="error"style={{ display: '(register_error) ? block : none' }}>
										{register_error}
									</div>
					                <div className="term_condition_section">
					                  <p>
					                    By Creating and account,you agree to our{" "}
					                    <Link to='term-condition'>Term and Condition <span> & </span> Privacy Policy.</Link>
					                  </p>
					                </div>
					                <div className="submit_btn">
					                  <button type="submit" className="btn signup_btn">Sign Up</button>
					                </div>
								</form>
							</div>
						</div>
					</div>
				<Footer linkText="Already have an account?" pageName="/" />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {	
	return {
		loader: state.auth.loader,
		register_error: state.auth.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSignUp: (form_data) => dispatch(actions.SignUp(form_data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);