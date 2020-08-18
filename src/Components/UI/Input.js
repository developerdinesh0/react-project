import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const Input = (props) => {
	let form_element = '';
	switch (props.element_type) {
		case 'input':
			form_element = (
				<input
					value={props.value}
					{...props.element_config}
					onChange={props.changed}
				/>
			);
			break;
		case 'select':
			form_element = (
				<select
					{...props.element_config}
					value={props.value}
					onChange={props.changed}
				>
					{props.label.map((option) => (
						<option value={option.value} key={option.opk}>
							{option.label}
						</option>
					))}
				</select>
			);
			break;
		default:
			form_element = (
				<input {...props.element_config} onChange={props.changed} />
			);
			break;
	}

	return (
		<div className='col-6'>
			<div className='form-group control'>
				{form_element}
				{props.element_type === 'input' ? (
					<label className={props.value ? 'has-value' : ''}>
						{props.label}
					</label>
				) : null}
				{!props.valid ? (
					<span className='field-error'>{props.error_msg}</span>
				) : (
					''
				)}
			</div>
		</div>
	);
};
export default Input;
