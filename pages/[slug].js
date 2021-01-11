import React, { Component } from 'react'
import  { withRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Detail from '../src/containers/category/component/detail'

class Post extends Component {
  static async getInitialProps(context) {
   let { query } = context
   const info =  await axios.get(`http://joydimba.herokuapp.com/api/blog/blog/${query.slug}`)
  
   return {
     post: info
   }
}



  render() {
    
    console.log(this.props.post);
   
    

    return (
		 <>


        </>
    
    )
    }
}

export default withRouter(Post)