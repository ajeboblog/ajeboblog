import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
const OwlCarousel = dynamic(() => import('react-owl-carousel'),
{ ssr: false })
import {
  makeSelectRecentBlogsIsLoading,
  makeSelectRecentBlogs,
} from '../../utils/selectors';
import injectSaga from '../../../../utils/injectSaga';
import injectReducer from '../../../../utils/injectReducer';
import reducer from '../../utils/reducer';
import saga from '../../utils/saga';
import * as mapDispatchToProps from '../../utils/actions';
import moment from "moment";
import RecentBlog from '../../component/recent'
import Popular from '../../component/popularpost'
import Header from '../../../../assets/Header'
import Footer from '../../../../assets/Footer'
import Footer2 from '../../../../assets/Footer2'
import Music from '../Music/components/latest'
import Chart from '../Music/components/chart'

import Album from '../Music/components/album'
import Head from 'next/head'

export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadRecentBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };


  state= {
    responsive:{},
}

  componentDidMount() {
    this.props.clearOne();
    this.props.loadRecentBlogsRequest();
    this.props.loadPopularPostRequest();


    const desktop = this.props.desktop ? this.props.desktop : 4;
    const tablet = this.props.tablet ? this.props.tablet : 2;
    const mobile = this.props.mobile ? this.props.mobile : 1;
    this.setState({
        responsive:{
            0: {
                items: mobile,
            },
            768: {
                items: tablet,
            },
            1000:{
                item: desktop
            }
        }
    })
}
  



  render() {
const blogs = this.props.blogs

const posts = this.props.posts;
        const column = this.props.column ? this.props.column : 4;
        const gap = this.props.gap ? this.props.gap : 10;
        const loop = this.props.loop === false ? this.props.loop : true;
        const dots = this.props.dots === false ? this.props.dots : true;
        const nav = this.props.nav === false ? this.props.nav : false;
        const autoPlay = this.props.autoPlay === false ? this.props.autoPlay : true;


    return (
      <>

<Head>
      <title> Ajeboblog | Home</title>
      <meta
      key="description"
      name="description"
      content="This is the Home of Home News"
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
      content="Ajeboblog | Home"
      />



    </Head>

       <Header/>
       
     <br/>
     
       <section className="site-section py-lg">
                <div className="container">
            
                


          <OwlCarousel className="owl-theme"
                            loop={loop}
                            margin={gap}
                            nav={nav}
                            dots={dots}
                            items={column}
                            autoplay={autoPlay}
                            responsive={this.state.responsive}
                             >

<div class="item">
                  <div class="single-hero-post">
                  
                  <div class="slide-img bg-img"></div>
                 
                  <div class="hero-slides-content">
                <p>category1</p>
                      <a href="#" class="post-title">
                          <h4>title1</h4>
                      </a>
                  </div>
              </div>
                  </div>



                  
                  <div class="item">
                  <div class="single-hero-post">
                  
                  <div class="slide-img bg-img"></div>
                 
                  <div class="hero-slides-content">
                <p>category2</p>
                      <a href="#" class="post-title">
                          <h4>title2</h4>
                      </a>
                  </div>
              </div>
                  </div>


                  
                  <div class="item">
                  <div class="single-hero-post">
                  
                  <div class="slide-img bg-img"></div>
                 
                  <div class="hero-slides-content">
                <p>category3</p>
                      <a href="#" class="post-title">
                          <h4>title3</h4>
                      </a>
                  </div>
              </div>
                  </div>

             
                 </OwlCarousel>


                  <div className="row blog-entries element-animate">
                 <div className="col-12  main-content">
                   <RecentBlog/>
                  <Popular/>
                  <br/>
 
                  <Chart/>
                  
                  <br/>
                  <hr/>
                  <br/> <br/><br/><br/>
                 
                  <Music/>
                  <Album/>
                    </div>


                  </div>


                </div>
              </section> 
              <Footer/>
              <br/><br/>
              <Footer2/>
   </>
      
     
      );
    }
  }
  
  const mapStateToProps = createStructuredSelector({
    loading: makeSelectRecentBlogsIsLoading(),
    blogs: makeSelectRecentBlogs(),
  });
  
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );  

  
const withReducer = injectReducer({ key: 'blogPage', reducer });
const withSaga = injectSaga({ key: 'blogPage', saga });


  export default compose(
    withSaga,
    withReducer,
    withConnect)(Home);
