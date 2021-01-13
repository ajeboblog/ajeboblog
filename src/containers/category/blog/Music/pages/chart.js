import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Header from '../../../../../assets/Header'
import Footer2 from '../../../../../assets/Footer2'


export default class chart extends Component {
  render() {


    const styling = {
      backgroundImage: `url('./images/bg-01.jpg')`,
    }

    return (
      <>
      <Header/>
      
      

  <div class="page-content">
      <div class="page-col row-col"><div class="page-left col-lg-9 b-r no-border-md">
    	<div class="padding">
        
<div class="page-title">
  <h1 class="inline m-b">Charts </h1></div>
        
        <div id="post-widget-chart">
    <div class="row item-list item-list-li item-list-md" >

        
       <div class="col-xs-12 col-xs-12">

            <div class="item r item-track" data-id="1120">
                                <div class="item-media ">
                                        
                    <a href="../track/pink-floyd-another-brick-in-the-wall-will-barber-the-voice-2017-blind-audition/index.html" class="item-media-content" style={styling}></a>
                    
                    
                    <div class="item-overlay center">
                        <button  class="btn-playpause">Play</button>
                    </div>
                </div>
                                                <div class="item-info">
                    <div class="item-overlay bottom text-right">
                                                <a class="btn-like " data-site-id="1" data-post-id="1120" data-count="8">
	<span class="">
		<i class="fa fa-heart-o"></i>
		<i class="active fa fa-heart text-primary"></i>
	</span>
	</a>
                        <a href="#" class="btn-more" data-toggle="dropdown"><i class="fa fa-ellipsis-h"></i></a>
                        <div class="dropdown-menu pull-right l-h grey lt"></div>
                    </div>
                    <div class="item-meta text-sm text-muted item-meta-right">
  <span class="item-meta-stats text-sm">
  	<span class="text-muted"><i class="fa fa-play text-muted m-r-xs"></i></span>
  	<span class="post-views-all text-muted">1.0K</span>
  </span>
</div>
                    <div class="item-title text-ellipsis">
                        <a href="../track/pink-floyd-another-brick-in-the-wall-will-barber-the-voice-2017-blind-audition/index.html">Pink Floyd – Another Brick In the Wall | Will Barber| The Voice 2017| Blind Audition</a>
                    </div>
                                        <div class="item-author text-sm text-ellipsis text-muted">
                        <a href="../user/admin/index.html" title="Posts by Pablo Nouvelle" rel="author">Pablo Nouvelle</a>                    </div>
                                    </div>
                            </div>

        </div>
            </div>
</div>
    	</div></div>      
      
      </div>
    </div>
  </div>
 
      </>
    )
  }
}
