import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectPopularPostLoading,
  makeSelectPopularPost,
} from '../utils/selectors';

function Recent(props) {
 
  return (
    <>
       <div className="container">
     
     <h5 className="heading">Hot Topics</h5>
     <div className="post-entry-sidebar">
       <ul>
          {props.blogs.length >= 1
                  ? props.blogs.slice(0, 6).map(popular => {
                      return (
            <li key ={popular._id} >
              <a href={`/${popular.slug_url}`}>
              <img
                src={popular.thumbnail}
                alt="ajeboblog"
                className="mr-4"
              />
                <div className="text">
                      <h6>{popular.title.substring(0, 70) + '...'}</h6>
                  <div className="post-meta">
                    <span className="mr-2">{moment(popular.published_on).format('MMM Do YYYY')}</span>
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
  loading: makeSelectPopularPostLoading(),
  blogs: makeSelectPopularPost()
});

export default connect(mapStateToProps)(Recent);
