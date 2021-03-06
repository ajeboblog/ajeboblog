import React from 'react';
import moment from "moment";
import dynamic from 'next/dynamic'
import InstagramEmbed from 'react-instagram-embed'
import { Tweet } from 'react-twitter-widgets'
import Head from 'next/head'
import Header from '../../../../assets/Header'
import Footer from '../../../../assets/Footer'



class AddEdit extends React.PureComponent {


    renderTwitter(one){
      if(one.twitter){
        return(
          <Tweet tweetId={one.twitter} />
        )
      }
    }
    
    renderInstagram(one){
      if(one.instagram){
        return(
          <InstagramEmbed
          url={one.instagram}
          maxWidth = {320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
         />
        )
      }
    }

    renderImage1(one) {
      if (one.images[0]) {
        return (
          <img
            src={one.images[0].data_url}
            alt="ajeboblog"
            className="img-fluid"
          />
        );
      }
      else{
        return(
          <>


          </>
        )
      }
    }
    
    renderImage2(one) {
      if (one.images[1]) {
        return (
          <img
            src={one.images[1].data_url}
            alt="ajeboblog"
            className="img-fluid2"
          />
          
        );
      }
      else{
        return(

          <>

          </>
        )
      }
    }
    
    renderBody1(firstline) {
      if (firstline !== "none") {
        return (
          <>
        <p><h7>{firstline}</h7></p>
        <br/>
        </>
        );
      }
    }

    
    renderBody2(secondline) {
      if (secondline !== "none") {
        return (
          <>
        <p><h7>{secondline}</h7></p>
        <br/>
        </>
        );
      }
    }



    renderBody3(thirdline) {
      if (thirdline !== "none") {
        return (
          <>
        <p><h7>{thirdline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody4(fourthline) {
      if (fourthline !== "none") {
        return (
          <>
        <p><h7>{fourthline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody5(fifthline) {
      if (fifthline !== "none") {
        return (
          <>
        <p><h7>{fifthline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody6(sixthline) {
      if (sixthline !== "none") {
        return (
          <>
        <p><h7>{sixthline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody7(seventhline) {
      if (seventhline !== "none") {
        return (
          <>
        <p><h7>{seventhline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody8(eightline) {
      if (eightline !== "none") {
        return (
          <>
        <p><h7>{eightline}</h7></p>
        <br/>
        </>
        );
      }
    }


    renderBody9(ninethline) {
      if (ninethline !== "none") {
        return (
          <>
        <p><h7>{ninethline}</h7></p>
        <br/>
        </>
        );
        }
    }


    renderBody10(tenthline) {
      if (tenthline !== "none") {
        return (
          <>
        <p><h7>{tenthline}</h7></p>
        <br/>
        </>
        );
      }
    }

  render() {
   
    const {
     
      one,
     
    } = this.props.detail;
    
    const str = one.description 
    //const str = "Hello world, welcome to the universe. This is an amazing place. To be in."
    var pFirst = str.indexOf(".");
    var pSecond = str.indexOf(".", pFirst + 1)
    var pThird = str.indexOf(".", pSecond + 1)
    var pFourth = str.indexOf(".", pThird + 1)
    var pFifth = str.indexOf(".", pFourth + 1)
    var pSixth = str.indexOf(".", pFifth + 1)
    var pSeventh = str.indexOf(".", pSixth + 1)
    var pEight = str.indexOf(".", pSeventh + 1)
    var pNineth = str.indexOf(".", pEight + 1)
    var pTenth = str.indexOf(".", pNineth + 1)
  
  
    if(pFirst === -1){
      
      var firstline = "none"
      }
      else{
    var firstline = str.substring(0, pFirst + 1);
      }
  
  
    if(pSecond === -1){
      
      var secondline = "none"
      }
      else{
    var secondline = str.substring(pFirst + 1, pSecond + 1)
      }
  
  
   if(pThird <= pSecond ){  
      
      var thirdline = "none"
      var error = "true"
      
      }
      else{
        if(error === "true"){
          var thirdline = "none"
        }
        else{
    var thirdline = str.substring(pSecond + 1, pThird + 1);
        }
      }
  
  
  
    if(pFourth <= pSecond){
    var fourthline = "none"
    var error = "true"
      
    }
    else{
      if(error === "true"){
        var fourthline = "none"
      }
      else{
      var fourthline = str.substring(pThird + 1, pFourth + 1);
    }
  }
  
  
    if(pFifth <= pSecond){
     
      var fifthline = "none"
      var error = "true"
      
      }
      
      else{
        if(error === "true"){
          var fifthline = "none"
        }
        else{
        var fifthline = str.substring(pFourth + 1, pFifth + 1);
        }
      }
  
  
      if(pSixth <= pSecond){
        
        var sixthline = "none"
        var error = "true"
      
        }
        else{
          if(error === "true"){
            var sixthline = "none"
          }
          else{
          var sixthline = str.substring(pFifth + 1, pSixth + 1);
          }
        }
  
  
  
        if(pSeventh <= pSecond){
         
          var seventhline = "none"
          var error = "true"
      
          }
          else{
            if(error === "true"){
              var seventhline = "none"
            }
            else{
            var seventhline = str.substring(pSixth + 1, pSeventh + 1);
            }
          }
  
  
  
          if(pEight <= pSecond){
           
            var eightline = "none"
            var error = "true"
      
            }
            else{
                  if(error === "true"){
                    var eightline = "none"
                  }
                  else{
                  var eightline = str.substring(pSeventh + 1, pEight + 1);
                  }
            }




  
            if(pNineth <= pSecond){
             
              var ninethline = "none"
              var error = "true"
      
              }
              
              else{
                      if(error === "true"){
                      var ninethline = "none"
                    }
                    else{
                      var ninethline = str.substring(pEight + 1, pNineth + 1);
                      }
              }




              if(pTenth <= pSecond){
               
                var tenthline = "none"
                var error = "true"
      
                }
                else{
                  if(error === "true"){
                    var tenthline = "none"
                  }
                  else{
                  var tenthline = str.substring(pNineth + 1, pTenth + 1);
                  }
                }
  
  
   return (
    <>
<Header/>
    <div className="site-cover site-cover-sm same-height overlay single-page" style = {{backgroundImage: `url("${one.thumbnail}")`}}>
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="post-entry text-center">
                <span className="post-category text-white bg-success mb-3">{one.category}</span>
                <h1 className="mb-4">{one.title}</h1>
                <div className="post-meta align-items-center text-center">
                  <figure className="author-figure mb-0 mr-3 d-inline-block"><img src={one.avatar} alt={one.author} className="img-fluid"/></figure>
                  <span className="d-inline-block mt-1">By {one.author}</span>
                  <span>&nbsp;-&nbsp; {moment(one.published_on).format('MMM Do YYYY')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div>
        <section className="site-section py-lg">
        <div className="container">
          
          <div className="row blog-entries element-animate">
  
            <div className="col-md-12 col-lg-8 main-content">
              
              <div className="post-content-body">
              {this.renderBody1(firstline)}
              {this.renderBody2(secondline)}
              {this.renderImage1(one)}
           
              {this.renderBody3(thirdline)}
              {this.renderImage2(one)}
              {this.renderBody4(fourthline)}
              {this.renderBody5(fifthline)}
              {this.renderBody6(sixthline)}
              {this.renderBody7(seventhline)}
              {this.renderBody8(eightline)}
              {this.renderBody9(ninethline)}  
              {this.renderBody10(tenthline)}
              {this.renderTwitter(one)}
                {this.renderInstagram(one)}
              <div className="row mb-5 mt-5">

                <div className="col-md-12">
                
            
              </div>
              
               </div>
              


              </div>
   
             
            </div>
  
            
  
            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="/" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter"/>
                  </div>
                </form>
              </div>
       
              
             
  
             
            </div>
           
  
          </div>
        </div>
      </section> 
      </div>





<Footer/>

    </>
    );
  }
}


export default AddEdit

