import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectRecentBlogsIsLoading,
  makeSelectRecentBlogs,
} from '../utils/selectors';
import * as mapDispatchToProps from '../utils/actions';
import moment from "moment";
import Loader from '../../../assets/Loader'

export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadRecentBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };


  render() {
    const styling = {
      backgroundImage: `url('./images/bg-01.jpg')`,
    }


    return (
      <>
    <div class="page-content-wrapper py-3">
      <div class="container">
      <div class="row g-3">
        <div className="col-md-7">
               <h5>Recent Posts</h5>
               <br/>
         </div>
     
        {this.props.blogs
                 ? this.props.blogs.slice(4, 11).map(blog => {
                   return(
        
        <div class="row g-3">
          <div class="col-12">
            <div class="card shadow-sm blog-list-card">
              <div class="d-flex align-items-center">
                <div class="card-blog-img position-relative" style={{backgroundImage: `url(${blog.thumbnail})`}}><span class="badge bg-warning text-dark position-absolute card-badge">{blog.category}</span></div>
                <div class="card-blog-content"><span class="badge mb-2 d-inline-block">{moment(blog.published_on).format('MMM Do YYYY')}</span><a class="blog-title d-block mb-3 text-dark" href={blog.slug_url}>{blog.title}</a><a class="btn btn-primary btn-sm" href={blog.slug_url}>Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    ): 
    <div>
    <Loader/>
    </div>
    }


     
    </div>
   </div>
  </div>
        </>
     
      );
    }
  }
  
  Home.propTypes = {
    loading: PropTypes.bool.isRequired,
    blogs: PropTypes.array.isRequired,
  };

  
  const mapStateToProps = createStructuredSelector({
    loading: makeSelectRecentBlogsIsLoading(),
    blogs: makeSelectRecentBlogs(),
  });
  
  

  export default connect(mapStateToProps)(Home)
