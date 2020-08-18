import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
	return (
		<Link
			to={props.link}
			className={
				props.is_active ? 'active-page-breadcrumb' : 'disable-page-breadcrumb'
			}
		>
			{props.title}
		</Link>
	);
};
export default BreadCrumb;
