import React from 'react';
import moment from 'moment';


export class Recent extends React.Component {
 
    render(){

  

    return (
      <>
     <div className="site-section bg-light">
       <div className="container">
          <div className="row mb-12">
            <div className="col-md-12">
               <h4>Latest</h4><br/>
             </div>
          </div>
        <div className="row align-items-stretch retro-layout">
     {this.props.recent
      ? this.props.recent.slice(0, 3).map(popularpost => {
      return(
<>
         <div className="col-md-5 order-md-2" key ={popularpost.slug_url}>
          <a href={`/${popularpost.slug_url}`}
           className="hentry img-1 h-100 gradient" style={{backgroundImage: `url(${popularpost.thumbnail})`}} >
              <span className="post-category text-white bg-danger">{popularpost.category}</span>
              <div className="text">
                <h2>{popularpost.title.substring(0,70) + '...'}</h2>
                <span>{moment(popularpost.published_on).format('MMM Do YYYY')}</span>
              </div>
            </a>
         </div>  <br/>
         </>       

           );
        }
        ): 
        <div>
        
        </div>
        }
         </div>
         </div>
         </div>  
        
        </>
     
      );
    }
  }
  

export default Recent
