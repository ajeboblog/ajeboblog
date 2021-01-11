import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRecentBlogsIsLoading,
  makeSelectRecentBlogs,
} from '../utils/selectors';


export class Recent extends React.Component {
 

render(){
    return (
      <>
     <div class="page-content-wrapper py-3">
      <div class="container">
        <div class="row g-3">
        <div className="col-md-7">
               <h5>New Posts</h5>
               <hr/>
         </div>
         </div>
         <div class="row">
        {this.props.blogs
                 ? this.props.blogs.slice(0, 9).map(blog => {
                   return(
        
        
                    <div class="col-12 col-md-6 col-lg-4">
          <div class="card shadow-sm blog-list-card">
              <div class="d-flex align-items-center">
                <div class="card-blog-img" style={{backgroundImage: `url(${blog.thumbnail})`}}><span class="badge bg-warning text-dark position-absolute card-badge">{blog.category}</span></div>
                <div class="card-blog-content"><span class="badge mb-2 d-inline-block">{moment(blog.published_on).format('MMM Do YYYY')}</span><h3><a class="text-dark" href={blog.slug_url}>{blog.title.substring(0, 50) + '...'}</a></h3></div>
              </div>
            </div>
        </div>  
      );
    }


    ): 
    <div>
  
    </div>
    }


     
    </div>
    <br/>
    <div className="seemore">
    <a class="btn btn-primary btn-sm" href="/">See More</a>
               
         </div>
   </div>
  </div>
        </>
     
      );
    }
  }
  
Recent.propTypes = {
  loading: PropTypes.bool.isRequired,
  blogs: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectRecentBlogsIsLoading(),
  blogs: makeSelectRecentBlogs()
});

export default connect(mapStateToProps)(Recent);
