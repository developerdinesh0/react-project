import React from 'react';
const RecordDisplay = (props) => {
	return (
		<div className='col-md-8 text-right'>
			<div className='select-number-block'>
				<select>
					<option>10</option>
				</select>
			</div>
			<span>
				Display {props.start}-{props.last} of {props.total} records
			</span>
		</div>
	);
};
export default RecordDisplay;
