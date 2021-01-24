import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'),
{ ssr: false })


export default class newmusic extends Component {


  state= {
    responsive:{},
}

  componentDidMount() {
    
    
    const desktop = this.props.desktop ? this.props.desktop : 4;
    const tablet = this.props.tablet ? this.props.tablet : 2;
    const mobile = this.props.mobile ? this.props.mobile : 1;
    this.setState({
        responsive:{
            0: {
                items: mobile,
            },
            768: {
                items: tablet,
            },
            1000:{
                item: desktop
            }
        }
    })
}

  render() {
    
    const music = this.props.music


    const column = this.props.column ? this.props.column : 4;
    const gap = this.props.gap ? this.props.gap : 10;
    const loop = this.props.loop === false ? this.props.loop : true;
    const dots = this.props.dots === false ? this.props.dots : true;
    const nav = this.props.nav === false ? this.props.nav : false;
    const autoPlay = this.props.autoPlay === false ? this.props.autoPlay : true;




    return (
      <>
     
      <div class="container">
      <div class="flex-grow-1">
    
                        <h5>Fashion</h5>
                        <hr/>
                 
                    <p>New Release</p>
                </div>
                

                <OwlCarousel className="owl-theme"
                            loop={loop}
                            margin={gap}
                            nav={nav}
                            dots={dots}
                            items={column}
                            autoplay={autoPlay}
                            responsive={this.state.responsive}
                             >

{this.props.music
                 ? this.props.music.slice(0, 9).map(blog => {
                   return(

              <div class="item">
                  <div class="single-hero-post" style={{ backgroundImage: `url(${blog.thumbnail})`}}>
                  
                  <div class="slide-img bg-img"></div>
                 
                  <div class="hero-slides-content">
                   <p>{blog.category}</p>
                      <a href={`/${blog.slug_url}`} class="post-title">
                          <h4>{blog.title}</h4>
                      </a>
                  </div>
              </div>
                  </div>
 );
}


): 
<div>
Loading...
</div>
}



                 </OwlCarousel>
       </div>
      </>
    )
  }
}
