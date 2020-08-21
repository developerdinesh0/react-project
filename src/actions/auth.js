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
		.post(
			actionType.API_ROOT + '/api/auth.php',
			{
				form_data: form_data
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((response) => {
			console.log(response);
		}).catch((error) => {
			dispatch(signUpFail('Something went wrong, Please try again.'));
		});

	}
}