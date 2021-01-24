import React, { Component } from 'react'
import axios from 'axios'
import Song from '../../src/containers/category/blog/Music/pages/song'


export default class index extends Component {

  static async getInitialProps(context) {
    let { query } = context
    const post =  await axios.get(`http://localhost:5000/api/blog/musicbyid/${query.id  }`)
   
 
 
    return {
      post: post.data,
    }
 }





  render() {
    return(

      <div>
          <Song song={this.props.post}/>  
       
      </div>
    )
  }
}
