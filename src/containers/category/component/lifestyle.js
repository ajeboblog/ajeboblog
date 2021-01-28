import React from 'react';
import moment from 'moment';


export class Recent extends React.Component {
 
  renderMainImage(lifestyle) {
    if (lifestyle.thumbnail) {
      return (
        <img
          src={lifestyle.thumbnail}
          alt="ajeboblog"
          className="mr-4"

        />
      );
    }
  }

render(){
    return (
      <>
      <div className="container">
     <div className="sidebar-box">
        <h3 className="heading">Lifestyle</h3>
        <div className="post-entry-sidebar">
          <ul>
          {this.props.lifestyle
                  ? this.props.lifestyle.slice(0, 4).map(lifestyle => {
                      return (

            <li key ={lifestyle.slug_url} >
              

              <a href={`/${lifestyle.slug_url}`}>
              <div className="row">

              <div className="col-3">
               {this.renderMainImage(lifestyle)}
               </div>
               <div className="col-9">
                <div className="text">
                      <h4>{lifestyle.title.substring(0, 70) + '...'}</h4>
                  <div className="post-meta">
                    <span className="mr-2">{moment(lifestyle.published_on).format('MMM Do YYYY')}</span>
                  </div>
                </div>

                </div></div>
              </a>
              
            </li>
       );
      }): <div></div>}

          </ul>
        
        </div>
        </div></div>
        </>
     
      );
    }
  }
  

export default Recent
