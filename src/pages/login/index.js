
import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

import logo from '../../images/logo.png'

function Login(props) {
	return (
		<div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card h-auto">
          <div className="card-header">
            <h3>Sign In</h3>
            {/* ! use when implementing OAuth in the future? icons found in '@fortawesome/free-brands-svg-icons */}
            {/* <div className="d-flex justify-content-end social_icon">
              <span><FontAwesomeIcon icon={faFacebookSquare} /></span>
              <span><FontAwesomeIcon icon={faGooglePlusSquare} /></span>
              <span><FontAwesomeIcon icon={faTwitterSquare} /></span>
            </div> */}
          </div>
          <div className="m-3">
            <h3 className="text-center text-light">Login to continue!</h3>
            <div className="d-flex justify-content-center"><img className="pl-5" src={logo} /></div>
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FontAwesomeIcon icon={faUser}/></span>
                </div>
                <input type="text" className="form-control" placeholder="username"/>
                
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FontAwesomeIcon icon={faKey}/></span>
                </div>
                <input type="password" className="form-control" placeholder="password"/>
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox"/>Remember Me
              </div>
              <div className="form-group">
                <input type="submit" value="Login" className="btn float-right login_btn"/>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a className="red-text" href="#">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a className="red-text" href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}

Login.propTypes = {
    
};

export default Login;