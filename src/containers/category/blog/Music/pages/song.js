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
        <div className="container">
                  <div class="page-title">
                    <h3 class="inline m-b">Song
                    </h3>

                  </div>
                  <br/>


                <div class="row">

                  <div class="col-6">
                  <div class="album-rounded ">
                 <img src="images/bg-01.jpg"
                 className="album-shape"
                 alt=""/>
                    </div>
                    <div class="item-title3 text-ellipsis">
                        <a href="/">
                            Fetty Wap                            
                        </a>
                    </div>


                    <div class="item-meta text-sm text-ellipsis text-muted">
                      <span>2 Songs</span>
                    </div>

                  </div>
                  <div class="col-6">
                    Album Detail

                  </div>
                </div>

                <br/><br/>

                <div class="d-flex flex-wrap align-items-end">
                <div class="flex-grow-1">
                  
                    <p>Songs</p>
                    </div></div><hr/><br/>
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



</div></div>
              <Footer2/>
   </>
      );
    }
  }
  
  export default Index
