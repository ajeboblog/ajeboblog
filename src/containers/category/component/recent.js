import React from 'react';
import moment from 'moment';


export class Recent extends React.Component {
 
    renderMainImage(recent) {
        if (recent.thumbnail) {
          return (
            <img
              src={recent.thumbnail}
              alt="ajeboblog"
              className="mr-4"
    
            />
          );
        }
      }

render(){
    return (
      <><br/><br/>
      <div className="container">
    <div className="sidebar-box">
        <h3 className="heading">Latest Post</h3>
        <div className="post-entry-sidebar">
          <ul>
          {this.props.recent
                  ? this.props.recent.slice(0, 4).map(recent => {
                      return (

            <li key ={recent.slug_url} >
              

              <a href={`/${recent.slug_url}`}>
              <div className="row">

              <div className="col-3">
               {this.renderMainImage(recent)}
               </div>
               <div className="col-9">
                <div className="text">
                      <h4>{recent.title.substring(0, 70) + '...'}</h4>
                  <div className="post-meta">
                    <span className="mr-2">{moment(recent.published_on).format('MMM Do YYYY')}</span>
                  </div>
                </div>

                </div></div>
              </a>
              
            </li>
       );
      }): <div></div>}

          </ul>
        
        </div>
        </div>

        </div>
          </>
     
      );
    }
  }
  

export default Recent
