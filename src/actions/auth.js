import * as actionType from '../constants/actionTypes';
import { createBrowserHistory } from 'history';
import axios from 'axios';

export const history = createBrowserHistory();

export const signUpStart = () => {
	return {
		error: null,
		loader: true,
		type: actionType.SIGNUP_START,
	};
};

export const signUpFail = (error) => {
	return {
		error: error,
		loader: false,
		type: actionType.SIGNUP_FAIL,
	};
};

export const signUnSuccess = (response) =>{
	return {
		error: null,
		loader: false,
		type: actionType.SIGNUP_SUCCESS,
	};
}

export const SignUp = (form_data) => {
	return (dispatch) => {
		dispatch(signUpStart());
		axios
		.post(
			actionType.API_ROOT + '/api/auth_register.php',
			form_data,
			{
				headers: {					
					"Content-Type": "multipart/form-data",
				},
			}
		).then((response) => {
			if(response.data.status === 'error'){
				dispatch(signUpFail('User already register. Please try with another email.'));
				history.push("/");
			}else{
				dispatch(signUnSuccess(response.data));
				history.push("/");
			}
		}).catch((error) => {
			dispatch(signUpFail('Something went wrong, Please try again.'));
		});

	}
}