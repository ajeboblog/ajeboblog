import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-next-router';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import {
  makeSelectEmail,
  makeSelectEmailError,
  makeSelectSuccess,
  makeSelectLoading,
} from './selectors';
import * as mapDispatchToProps from './actions';
import reducer from './reducer';
import saga from './saga';




class Subscribe extends Component {
    static propTypes = {
        setStoreValue: PropTypes.func.isRequired,
        errors: PropTypes.string,
        email: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
      };
    
      handleChange = name => e => {
        e.persist();
        this.props.clearQuery();
        this.props.setStoreValue({ key: name, value: e.target.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.saveSubscriberRequest();
      };
    
      render() {
        const { email, errors, loading } = this.props;
        const hasError = Boolean(errors);
    return (
        <div>
            <div class="cs-newsletter-form modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body p-5">
            <button class="btn btn-close p-1 ms-auto" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            <form onSubmit={this.handleSubmit}>
              <input class="form-control mb-3" type="email" onChange={this.handleChange('email')} placeholder="Enter your email"/>
              <button class="btn btn-primary w-100" type="submit">Get Notified</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
     )
    }
    }
    
    const mapStateToProps = createStructuredSelector({
        email: makeSelectEmail(),
        errors: makeSelectEmailError(),
        success: makeSelectSuccess(),
        loading: makeSelectLoading(),
        });
        
        const withConnect = connect(
        mapStateToProps,
        { ...mapDispatchToProps, push },
        );
        
        const withReducer = injectReducer({ key: 'subscriberPage', reducer });
        const withSaga = injectSaga({ key: 'subscriberPage', saga });
        
        export default compose(
        withReducer,
        withSaga,
        withConnect,
        )(Subscribe);
    