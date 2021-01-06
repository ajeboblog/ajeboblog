import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
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
import Head from 'next/head'

export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadRecentBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.clearOne();
    this.props.loadRecentBlogsRequest();
    this.props.loadPopularPostRequest();
  }

  render() {
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
            
                 <div className="row align-items-stretch retro-layout-2">
                 {this.props.blogs.length >= 1
            ? this.props.blogs.slice(0, 3).map(blog => {
                return(
                  <div className="col-md-4" >
            
            <a href={`/${blog.slug_url}`} 
           className="h-entry mb-30 v-height gradient" style={{backgroundImage: `url(${blog.thumbnail})`}} >
            <div className="text">
              <h2>{blog.title.substring(0, 70) + '...'}</h2>
              <span className="date">{moment(blog.published_on).format('MMM Do YYYY')}</span>
            </div>
          </a>
        
            </div>
           );
        }
        ): 
        <div>
        
        </div>
        }
                 </div>


                  <div className="row blog-entries element-animate">
             



                 <div className="col-md-12 col-lg-8 main-content">



                 
                   <div className="blog-content-body">
                      <div className="row mb-5 mt-5">
                        <div className="col-md-6 mb-4">
                         
                        </div>
                      </div>
                    </div>
                  <RecentBlog/>
                    <Popular/>

                 </div>
                    
                     
                    
        
                    <div className="col-md-12 col-lg-4 sidebar">
                      <div className="sidebar-box search-form-wrap">
                        <form action="/" className="search-form">
                          <div className="form-group">
                            <span className="icon fa fa-search"></span>
                            <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter"/>
                          </div>
                        </form>
                      </div>
                     
                      
                      
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
