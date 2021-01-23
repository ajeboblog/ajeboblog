import React, { Component } from 'react'
import  { withRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Home from "../src/containers/category/blog/Home"
import Entertainment from '../src/containers/category/component/entertainment'
import Lifestyle from '../src/containers/category/component/lifestyle'
import Sports from '../src/containers/category/component/sports'
import Header from '../src/assets/Header'
import Footer from '../src/assets/Footer'
import Footer2 from '../src/assets/Footer2'
import Music from '../src/containers/category/blog/Music/components/latest'

class Index extends Component {
  static async getInitialProps(context) {
   let { query } = context
   const post1 =  await axios.get(`http://localhost:5000/api/blog/editor`)
   const post2 =  await axios.get(`http://localhost:5000/api/blog/music`)
   const post5 =  await axios.get(`http://localhost:5000/api/blog/fashion`)
   const post3 =  await axios.get(`http://localhost:5000/api/blog/entertainment`)
   const post4 =  await axios.get(`http://localhost:5000/api/blog/lifestyle`)
  
   return {
     post: post1.data,
     music: post5.data,
     entertainment: post3.data,
     lifestyle: post4.data,
     sports: post2.data
   }


}

render(){
console.log( this.props.music.data )
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
                <div className="col-12  main-content">
                   <Entertainment entertainment={this.props.entertainment.data}/>
                   <Lifestyle lifestyle={this.props.lifestyle.data}/>
                   <Sports sports={this.props.sports.data}/>
                   <br/>
 
                  
                <Music music={this.props.music.data}/>
                <br/><br/>
                  </div>


                  </div>

                  <Footer/>
              <br/><br/>
              <Footer2/>
       </>
    )

    }
}

export default withRouter(Index)