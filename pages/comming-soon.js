import React from 'react'
import Back from '../src/assets/Back'
import Subscribe from '../src/assets/subscribe/subscribe2'


export default function Index() {

    const styling = {
		backgroundImage: `url('images/16.jpg')`,
		width:"100%",
		height:"100%"
	}

    return (
        <>
          
            <Back/>
            <Subscribe/>
        
   
    <div class="coming-soon-wrapper bg-white text-center bg-overlay" style={styling}>
      <div class="container">
        <div class="cs-logo"><a href="page-home.html"><img src="img/core-img/logo-dark.png" alt=""/></a></div>
        <h4 class="text-white display-3">Coming Soon</h4>
        <p class="text-white">It is very nicely designed &amp; coded with the latest technology.</p>
        <div class="countdown2" id="countdown2"></div>
        <div class="notify-email mt-5">
          <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Notify via Email</button>
        </div>
      </div>
    </div>
   
        </>
    )
}
