import React, { Component } from 'react'
import  { withRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'


class Post extends Component {
  static async getInitialProps(context) {
   let { query } = context
   const info =  await axios.get(`https://joydimba.herokuapp.com/api/blog/latest`)
  
   return {
     post: info
   }
}



  render() {
    
    console.log(this.props.post.data.title);
   
    

    return (
		  !this.props.post ? (

			<div className="notification is-danger">
				<Head>
					<title>Post Not Found</title>
				</Head>
				<h1 className="title"><i>Oops...</i></h1>
				<p>That post does not exist.</p>
			</div>
		) : (
		 <>



        </>
    )
    )
    }
}

export default withRouter(Post)