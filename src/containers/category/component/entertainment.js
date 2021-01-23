import React from 'react';
import moment from 'moment';


export class Recent extends React.Component {
 

render(){
    return (
      <>
     <div class="page-content-wrapper py-3">
      <div class="container">
        <div class="row g-3">
        <div className="col-md-7">
               <h5>Lifestyle</h5>
               <hr/>
         </div>
         </div>
         <div class="row">
        {this.props.entertainment
                 ? this.props.entertainment.slice(0, 9).map(blog => {
                   return(
        <>
        
                    <div class="col-12 col-md-6 col-lg-4">
          <div class="card shadow-sm blog-list-card">
              <div class="d-flex align-items-center">
                <div class="card-blog-img" style={{backgroundImage: `url(${blog.thumbnail})`}}><span class="badge bg-warning text-dark position-absolute card-badge">{blog.category}</span></div>
                <div class="card-blog-content"><span class="badge mb-2 d-inline-block">{moment(blog.published_on).format('MMM Do YYYY')}</span><h3><a class="text-dark" href={blog.slug_url}>{blog.title.substring(0, 50) + '...'}</a></h3></div>
              </div>
            </div>
        </div>  <br/><br/></>
      );
    }


    ): 
    <div>
  Loading...
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
  

export default Recent
