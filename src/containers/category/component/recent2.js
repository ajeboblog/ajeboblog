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


export class Home extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadRecentBlogsRequest: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
  };


  render() {
    
    return (
      <>
    
      <div className="container">
     
             <h5 className="heading">Recent Articles</h5>
             <div className="post-entry-sidebar">
               <ul>
     {this.props.blogs
                 ? this.props.blogs.slice(4, 11).map(recent => {
                   return(
                    <li key ={recent._id} >
                    <a href={`/${recent.slug_url}`}>
                    <img
                      src={recent.thumbnail}
                      alt="ajeboblog"
                      className="mr-4"
                    />
                      <div className="text">
                            <h6>{recent.title.substring(0, 70) + '...'}</h6>
                        <div className="post-meta">
                          <span className="mr-2">{moment(recent.published_on).format('MMM Do YYYY')}</span>
                        </div>
                      </div>
                    </a>
                    
                  </li>
           );
        }
        ): 
        <div>
        
        </div>
        }
     </ul>
        
        
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
