import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const signUpStart = () => {
	return {
		type: actionType.SIGNUP_START,
	};
};

export const signUpFail = (error) => {
	return {
		type: actionType.SIGNUP_FAIL,
		error: error,
	};
};

export const SignUp = (form_data) => {
	return (dispatch) => {
		dispatch(signUpStart());
		axios
		.patch(
			actionType.API_ROOT + '/api/auth_register.php',
			form_data,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		).then((response) => {
			console.log(response);
		}).catch((error) => {
			dispatch(signUpFail('Something went wrong, Please try again.'));
		});

	}
}