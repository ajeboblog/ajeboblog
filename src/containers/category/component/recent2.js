import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRecentBlogsIsLoading,
  makeSelectRecentBlogs,
} from '../utils/selectors';

function Recent(props) {
 
  return (
    <>
     
 <div className="sidebar-box">
        <h3 className="heading">Recent Articles</h3>
        <div className="post-entry-sidebar">
          <ul>
          {props.blogs.length >= 1
                  ? props.blogs.slice(4, 11).map(recent => {
                      return (
            <li key ={recent._id} >
              <a href={`/${recent.slug_url}`}>
              <img
                src={recent.thumbnail}
                alt="ajeboblog"
                className="img-fluid w-50 rounded-circle mr-4"
              />
                <div className="text">
                      <h4>{recent.title.substring(0, 70) + '...'}</h4>
                  <div className="post-meta">
                    <span className="mr-2">{moment(recent.published_on).format('MMM Do YYYY')}</span>
                  </div>
                </div>
              </a>
              
            </li>
       );
      }): <div></div>}

          </ul>
        
        </div>
        </div>
        </>
  );
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
