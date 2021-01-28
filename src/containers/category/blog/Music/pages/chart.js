import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Header from '../../../../../assets/Header'



export default class chart extends Component {
  render() {


    const styling = {
      backgroundImage: `url('./images/bg-01.jpg')`,
    }

    return (
      <>
      <Header/>
      
      
<br/><br/><br/>



  <div class="container">
   


                  <div class="page-title">
                    <h1 class="inline m-b">Charts 
                    </h1>

                  </div>
                  <br/><hr/><br/>
        
  

                               <div class="row">

                                      <div class="col-sm-10 col-9">
                                      
                                    <div class="row">

                                      
                                      <div class="col-4 col-lg-2">



                                      <img src="images/bg-01.jpg" alt=""/>
                                      </div>
                                      <div class="col-8 col-lg-10">
                                      <div class="item-info">
                                  <div class="item-title text-ellipsis">
                                      <a href="/">Fetty Wap Ft Monty &#8211; Way You Are (King Zoo)</a>
                                  </div>
                                    <div class="item-author text-sm text-ellipsis text-muted">
                                      <a href="/" title="Posts by Fetty Wap" rel="author">Fetty Wap</a> 
                                  </div>
                                  </div>
                                  



                                      </div>
                                      
                                    </div>
                                      

                     

                                    </div>

                                    <div class="col-sm-2 col-3">
                                    
                                    </div>


                                </div>
                            </div>
      </>
    )
  }
}
