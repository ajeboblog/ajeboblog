import React from 'react'
import AddChart from '../../../src/containers/admin/post/Chart/AddChart/index'
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
    <AddChart/>
     </>
      );
      delete rest.component; // eslint-disable-line no-param-reassign
      return (
        <>
        <AddChart/>
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
