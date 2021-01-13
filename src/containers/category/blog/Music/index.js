import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {  makeSelectEntertainmentList,
  makeSelectLoading,
  makeSelectQuery, } from './selectors';
import * as mapDispatchToProps from './actions';

import Header from '../../../../assets/Header'
import Footer2 from '../../../../assets/Footer2'
import Music from './components/latest'
import Chart from './components/chart'
import Album from './components/album'
import Chart2 from './components/chart2'
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

    const styling = {
      backgroundImage: `url('./images/bg-01.jpg')`,
    }

  return (
      <>
<Head>
      <title> Ajeboblog | Music</title>
      <meta
      key="description"
      name="description"
      content="This is the Home of Nigerian Music"
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
      content="Ajeboblog | Music"
      />



    </Head>



      <Header/>
      <div className="site-section">
        <br/><br/>      
        <div class="container overflow-hidden">

                <div class="heading">
                <div class="d-flex flex-wrap align-items-end"><div class="flex-grow-1">
                <h4>Music</h4>
                    <p>Listen top chart</p>
                  </div>
            
            </div>
            <hr/>
            </div>
              <Music/><br/><br/><br/>
              <Album/><br/><br/><br/>
              <Chart/>

      </div></div>
              <br/><br/>
              <Footer2/>
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
