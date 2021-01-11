import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import * as mapDispatchToProps from '../utils/actions';



const Dashboard = props => {
  const { currentBlogs, loading, pagination, handlePagination } = props;
  const maxPage = Math.ceil(pagination.totaldata / pagination.size);
  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(pagination.totaldata / pagination.size); i++) {
    pagenumber.push(i);
  }
  return loading ? (
    <>
     <div></div>
    </>
  ) : currentBlogs.length > 0 ? (
    <>




      {currentBlogs.map(each => {
        const {
          thumbnail,
          _id,
          title,
          category,
          author,
          name,
          published_on,
          slug_url,
          description,
          added_at,
          avatar,
        } = each;

        return (
          <>
          <div className="col-lg-4 mb-4">
                      <div className="entry2">
                      <a href={`/${slug_url}`}>
                      <img
                        src={thumbnail}
                        className="image-field2"
                        alt="ajeboblog"
                      />

                      </a>
                      
                        <div className="excerpt">
                        <span className="post-category text-white bg-success mb-3">{category}</span>
                        
                        <h2>
                        <a href={`/${slug_url}`}>
                          {title.substring(0, 70) + '...'}
                          </a>
                         
                         </h2>
                        <div className="post-meta align-items-center text-left clearfix">
                          
                          <span className="d-inline-block mt-1">By {name}</span> <span>-</span>
                          <span> {moment(published_on).format('MMM Do YYYY')}</span>
                        </div>
                        
                        <p>{description.substring(0, 120) + '...'}</p>
                        <br/>
                          
                          <a href={`/${slug_url}`}> 
                          <span className="btn btn-dark">Read More</span>
                          </a>
                        
                         
                        </div>
                      </div>
                    </div>
          </>
        );
      })}


<div class="container">
        <div class="card mt-3">
          <div class="card-body p-3">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center pagination-one">

              {pagination.page !== 1 && (
            <span>
              <button
                className="border border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white text-gray-800 font-bold w-10 h-10 rounded flex items-center justify-center"
                onClick={() =>
                  handlePagination({
                    ...pagination,
                    page: pagination.page - 1,
                  })
                }
              >
               <svg width="16" height="16" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
              </button>
            </span>
          )}



 {pagenumber.length > 0 &&
            pagenumber.map(each => (
              <span key={each}>
                <button
                  id={each}
                  className="page-item"
                  onClick={e => {
                    handlePagination({
                      ...pagination,
                      page: e.target.id,
                    });
                  }}
                >
                  {each}
                </button>
              </span>
            ))}
                

                <span>
            <button
              className="page-item"
              disabled={pagination.page === maxPage}
              onClick={() =>
                handlePagination({ ...pagination, page: pagination.page + 1 })
              }
            >
            <svg width="16" height="16" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </button>
          </span>


              </ul>
            </nav>
          </div>
        </div>
      </div>


    
      
    </>
  ) : (
    <div></div>
  );
};

Dashboard.propTypes = {
  currentBlogs: PropTypes.array.isRequired,
  loading: PropTypes.string,
  pagination: PropTypes.object,
  handlePagination: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(Dashboard);
