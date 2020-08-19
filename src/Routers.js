import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Home from './Components/Home';

const Routers = (props) => {
	return (
		<div className='main_container'>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/home' component={Home} />
			</Switch>
		</div>
	)
}


export default Routers;
