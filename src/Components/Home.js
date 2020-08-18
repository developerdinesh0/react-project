import React, { Component } from "react";

import Layout from '../Components/Includes/Layout';

class Home extends Component {
  render() {
    return (
      <div className="main_container">
        <Layout />
        <div className="main_wrap_content">
          <div className="container-fluid">
          <p> Home Page</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
