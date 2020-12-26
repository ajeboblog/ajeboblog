import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import withStyles from '@material-ui/core/styles/withStyles';

import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import NameInput from './components/NameInput';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import { FB_APP_ID, FB_APP_FIELDS, GOOGLE_CLIENT_ID } from '../../../Others/App/constants';
import { makeSelectLoading } from './selectors';


const SignupUserPage = ({
  classes,
  signupRequest,
  signupWithFbRequest,
  signupWithGoogleRequest,
  loading,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    signupRequest();
  };

  const styling = {
	backgroundImage: `url('./images/bg-01.jpg')`,
	width:"100%",
	height:"100%"
}

    return (
        <div>
         
		 <div className="container-login100" style={styling}>
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
		
			<form onSubmit={handleSubmit} className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Create Account
				</span>
				<NameInput />
          <EmailInput />
          <PasswordInput />
<br/>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn">
					{loading ?  <div className="btn_loading"><div></div><div></div><div></div><div></div><span className="ml-2">Sing Up</span></div> : 'Sign Up'}
					</button>
				</div>

				
				<div className="login100-form-special2">
				<br/>
				By registering, you agree to Ajeboblog's
				<a href="/terms"> Terms of Use </a>and <a href="/policy">Privacy Policy</a>
				</div>
				<br/><br/>
				<div className="container-login100-form-btn">
					<p>I have an account? <a href="/signin">SignIn</a></p>
				</div>

				

				

			</form>

			
		</div>
		</div>
        </div>
     );
	};
	
	SignupUserPage.propTypes = {
	  classes: PropTypes.object.isRequired,
	  signupRequest: PropTypes.func.isRequired,
	};
	
	const mapStateToProps = createStructuredSelector({
	  loading: makeSelectLoading(),
	});
	
	const withConnect = connect(
	  mapStateToProps,
	  mapDispatchToProps,
	);
	
	const withReducer = injectReducer({ key: 'signupUserPage', reducer });
	const withSaga = injectSaga({ key: 'signupUserPage', saga });
	
	const styles = {
	  googbtn: {
		boxShadow: 'none!important',
		border: '1px solid gainsboro!important',
		borderLeft: 'none!important',
	  },
	};
	
	const withStyle = withStyles(styles);
	
	export default compose(
	  withStyle,
	  withReducer,
	  withSaga,
	  withConnect,
	)(SignupUserPage);
	