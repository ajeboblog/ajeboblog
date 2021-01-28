import React from 'react';
import moment from 'moment';


export class Recent extends React.Component {
 
  renderMainImage(entertainment) {
    if (entertainment.thumbnail) {
      return (
        <img
          src={entertainment.thumbnail}
          alt="ajeboblog"
         

        />
      );
    }
  }

render(){
    return (
      <>
        <div className="container">
    <div className="sidebar-box">
        <h3 className="heading">Entertainment</h3>
        <div className="post-entry-sidebar">
          <ul>
          {this.props.entertainment
                  ? this.props.entertainment.slice(0, 9).map(entertainment => {
                      return (

            <li key ={entertainment.slug_url} >
              

              <a href={`/${entertainment.slug_url}`}>
              <div className="row">

              <div className="col-3">
               {this.renderMainImage(entertainment)}
               </div>
               <div className="col-9">
                <div className="text">
                      <h4>{entertainment.title.substring(0, 70) + '...'}</h4>
                  <div className="post-meta">
                    <span className="mr-2">{moment(entertainment.published_on).format('MMM Do YYYY')}</span>
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
