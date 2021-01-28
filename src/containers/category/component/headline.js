import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


export class Index extends React.Component {
  
   
  renderMainImage(headline) {
    if (headline.thumbnail) {
      return (
        <>
        <a href={`/${headline.slug_url}`}
          key={headline._id} className="hentry img-1 h-100 gradient" style={{backgroundImage: `url(${headline.thumbnail})`}} >
              <span className="post-category text-white bg-danger">{headline.category}</span>
              <div className="text">
                <h2>{headline.title.substring(0,70) + '...'}</h2>
                <span>{moment(headline.published_on).format('MMM Do YYYY')}</span>
              </div>
            </a><br/>
          </>  
      );
    }
  }
 
 
  
 render() {
    return (
      <div className="site-section">
      <div className="container">
      <div className="row mb-5">
            <div className="col-md-7">
              <h2>Headlines</h2>
            </div>
          </div>
        <div className="row align-items-stretch retro-layout">
        {this.props.headline.length >= 1
                  ? this.props.headline.slice(0, 3).map(headline => {
                      return (<>

          <div className="col-md-5 order-md-2" key ={headline.slug_url}>
            {this.renderMainImage(headline)}
          </div>

</>
             );
            })
         : <div></div>}
           </div>
         </div>
         </div>  
    );
  }
}


export default Index;
