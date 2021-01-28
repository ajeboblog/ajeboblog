import React, { Component } from 'react'
import  { withRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Home from "../src/containers/category/blog/Home"
import loadable from '@loadable/component'
const Lifestyle = loadable(() => import('../src/containers/category/component/lifestyle'), { 
  render: ({ Component, loading, ownProps }) => {
    if (loading) return <div>...</div>
    return <Component {...ownProps} />
  },
})
const Entertainment = loadable(() => import('../src/containers/category/component/entertainment'), {
  render: ({ Component, loading, ownProps }) => {
    if(loading) return <div>...</div>
    return <Component {...ownProps} />
  },
})
const Sports = loadable(() => import('../src/containers/category/component/sports'), {
  render: ({ Component, loading, ownProps }) => {
    if(loading) return <div>...</div>
    return <Component {...ownProps} />
  },
})

import Header from '../src/assets/Header'
import Footer from '../src/assets/Footer'
import Music from '../src/containers/category/blog/Music/components/latest'

class Index extends Component {
  static async getInitialProps(context) {
   let { query } = context
   const post1 =  await axios.get(`https://joydimba.herokuapp.com/api/blog/editor`)
   //const post2 =  await axios.get(`https://joydimba.herokuapp.com/api/blog/music`)
   const post5 =  await axios.get(`https://joydimba.herokuapp.com/api/blog/fashion`)
   const post3 =  await axios.get(`https://joydimba.herokuapp.com/api/blog/entertainment`)
   const post4 =  await axios.get(`https://joydimba.herokuapp.com/api/blog/lifestyle`)
  
   return {
     post: post1.data,
     music: post5.data,
     entertainment: post3.data,
     lifestyle: post4.data,
     //sports: post2.data
   }


}

render(){

		return (
	
       <>
       <Head>
      <title> Ajeboblog | Home</title>
      <meta
      key="description"
      name="description"
      content="This is the Home of Home News"
      />


     <meta
      key="og:site_name"
      property="og:site_name"
      content="Ajeboblog"
      />

<meta
      key="og:type"
      property="og:type"
      content="website"
      />

<meta
      key="og:title"
      name="og:title"
      property="og:title"
      content="Ajeboblog | Home"
      />



    </Head>
<Header/>
       <Home
        data={this.props.post.data}
        />

     <div className="row blog-entries element-animate">
           <div className="col-md-12 col-lg-8 main-content">

                   <Entertainment entertainment={this.props.entertainment.data}/>
                   <Lifestyle lifestyle={this.props.lifestyle.data}/>
                   
                   <br/>
 
                  
                <Music music={this.props.music.data}/>
                <br/><br/>
                  </div>


                  </div>

                  <Footer/>
              
       </>
    )

    }
}

export default withRouter(Index)