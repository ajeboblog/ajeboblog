import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Header from '../../../../../assets/Header'
import Footer2 from '../../../../../assets/Footer2'
import Head from 'next/head'


export class Index extends React.Component {

  

  render() {
   
    const styling = {
      backgroundImage: `url('./images/bg-01.jpg')`,
    }

  return (
      <>

      <Header/>
      <div className="site-section">
        <br/><br/>      
        <div class="container overflow-hidden">
            </div></div>
               
              <Footer2/>
   </>
      );
    }
  }
  
  export default Index
