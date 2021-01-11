import React from 'react'
import AddMusic from '../../../src/containers/admin/post/Music/AddMusic/index'
import { compose } from 'redux'
import Login from '../../signin/index'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
} from '../../../src/Others/App/selectors';

const AdminAdd = ({ token, logoutRequest, ...rest }) => {
    if (token) return (
    <>
    <AddMusic/>
     </>
      );
      delete rest.component; // eslint-disable-line no-param-reassign
      return (
        <>
        <AddMusic/>
        </>
      )
}


 
  
 
  const mapStateToProps = createStructuredSelector({
    token: makeSelectToken(),
  });
  
  const withConnect = connect(
    mapStateToProps,
  );

  export default compose( withConnect )(AdminAdd);
