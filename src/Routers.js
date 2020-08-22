import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';

import Dashboard from './Components/Dashboard/Dashboard';
import Tracks from './Components/Tracks/Tracks';

const Routers = (props) => {
	return (
		<div className='main_container'>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/register' component={Register} />

				<Route path='/dashboard' component={Dashboard} />
				<Route path='/tracks' component={Tracks} />
			</Switch>
		</div>
	)
}


export default Routers;
