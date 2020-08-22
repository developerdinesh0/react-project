import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Tracks extends Component{
	render() {
		return (
			<React.Fragment>
                <div className="wrapper d-flex align-items-stretch">
                    <nav id="sidebar">
                        <div className="p-4 pt-5">
                            <Link to="/profile">
                                <img
                                    className="img logo rounded-circle mb-5"
                                    src="https://colorlib.com/etc/bootstrap-sidebar/sidebar-01/images/logo.jpg"
                                    title="profile-image"
                                    alt="Logo"
                                />
                            </Link>
                            <ul className="list-unstyled components mb-5">
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="active">
                                	<span>Metrial</span>
                                	<ul className="list-unstyled collapse show">                		
                                        <Link to="/audience">Audience</Link>
                                        <Link to="/tracks">Tracks</Link>
                                        <Link to="/playlists">Playlists</Link>
                                	</ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div id="content" className="p-4 p-md-5">
                		<h2 className="mb-4">Tracks</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-striped">
                                  <thead>
                                    <tr>      
                                        <th>Song</th>
                                        <th>Artist</th>
                                        <th>Listeners</th>
                                        <th>Streams</th>
                                        <th>Downloads</th>
                                        <th>Relese Data</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Financial Woman</td>
                                      <td>P-Squear</td>
                                      <td>300</td>
                                      <td>200</td>
                                      <td>150</td>
                                      <td>3 days ago</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
			</React.Fragment>
		)
	}
}

export default Tracks;