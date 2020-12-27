import React, { Component } from 'react'
import  { withRouter } from 'next/router'
import Head from 'next/head'
import { compose } from 'redux'
import Detail from '../src/containers/category/component/detail'


class Post extends Component {

    static async getInitialProps(context) {
        let { query } = context
        const data = query.slug
       
        return {
          post: data
        }
     }
     

  render() {
    return (
<div>
<Detail post = {this.props.post}/>
</div>
      
    )
    }
}




  export default compose(withRouter)(Post);
