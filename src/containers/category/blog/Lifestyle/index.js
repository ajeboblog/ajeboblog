import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {  makeSelectEntertainmentList,
  makeSelectLoading,
  makeSelectQuery, } from './selectors';
import * as mapDispatchToProps from './actions';
import RenderBlogs from '../../component/render'
import Header from '../../../../assets/Header'
import Footer from '../../../../assets/Footer'
import injectSaga from '../../../../utils/injectSaga';
import injectReducer from '../../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Head from 'next/head'

export class EntertainmentListList extends React.Component {

  static propTypes = {
    loadEntertainmentListRequest: PropTypes.func.isRequired,
    entertainmentList: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadEntertainmentListRequest();
  }

  handlePagination = paging => {
    this.props.loadEntertainmentListRequest(paging);
  };

  render() {
    const {
      entertainmentList: { data, page, size, totaldata },
      loading,
    } = this.props;
    const pagination = { page, size, totaldata };

  return (
      <>

<Head>
      <title> Ajeboblog | Lifestyle</title>
      <meta
      key="description"
      name="description"
      content="This is the Home of Lifestyle News"
      />


     <meta
      key="og:site_name"
      property="og:site_name"
      content="Ajeboblog"
      />

<meta
      key="og:type"
      property="og:type"
      content="website"
      />

<meta
      key="og:title"
      name="og:title"
      property="og:title"
      content="Ajeboblog | Lifestyle"
      />



    </Head>




      <Header/>
     
      <div className="site-section">
        <br/><br/>      
        <div className="container">
            <div className="row mb-5">
               <div className="col-12">
               <h4>Lifestyle</h4> 
               </div>
            </div>
            <div className="row">

            <RenderBlogs
              loading={loading}
              currentBlogs={data}
              pagination={pagination}
              handlePagination={this.handlePagination}
            />



           </div>
       </div>
      </div>
      <Footer/>
             
   </>
      );
    }
  }
  const mapStateToProps = createStructuredSelector({
    entertainmentList: makeSelectEntertainmentList(),
    loading: makeSelectLoading(),
    query: makeSelectQuery(),
  });
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

  
  const withReducer = injectReducer({ key: 'blogPage', reducer });
  const withSaga = injectSaga({ key: 'blogPage', saga });
  

  export default compose(withConnect, withReducer, withSaga)(EntertainmentListList);
