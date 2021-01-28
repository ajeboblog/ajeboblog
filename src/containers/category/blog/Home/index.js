import React from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component'
import moment from "moment";
import Head from 'next/head'



const Meta = () => (
<div>
  <Head>
    <title>Ajeboblog | Home</title>
    <meta
    name="description"
    content="Welcome to Ajeboblog the Home of the most Informative and Exciting News"
    />
  </Head>
</div>
)

export class PostList extends React.Component {

  render() {
    
    return (
      
            <section className="site-section py-lg">
                <div className="container">
               <Meta/>
                 <div className="row align-items-stretch retro-layout-2">
                 {this.props.data
            ? this.props.data.slice(0, 3).map(post => {
                return(
                  <>
                  <br/><br/>
                  <div className="col-md-4" >
            
            <a href={`/${post.slug_url}`} 
           className="h-entry mb-30 v-height gradient" style={{backgroundImage: `url(${post.thumbnail})`}} >
            <div className="text">
              <h2>{post.title.substring(0, 70) + '...'}</h2>
              <span className="date">{moment(post.published_on).format('MMM Do YYYY')}</span>
            </div>
          </a>
        
            </div>
            </>
           );
        }
        ): 
        <div>
        
        </div>
        }
                 </div></div>


                  
              </section> 

      
     
      );
    }
  }


export default PostList
