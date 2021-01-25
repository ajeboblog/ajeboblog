import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectToken,
} from '../Others/App/selectors';

import SignOut from './signout'

const Header = ({ token, logoutRequest, ...rest }) => {
  if (token) return (<>

<div class="header-area" id="headerArea">
      <div class="container">
       
        <div class="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
         
          <div class="logo-wrapper"><a href="/"><img src="" alt=""/></a></div>
      
          <div class="navbar--toggler" id="affanNavbarToggler"><span class="d-block"></span><span class="d-block"></span><span class="d-block"></span></div>
        </div>
 
      </div>
    </div>
 
    <div class="sidenav-black-overlay"></div>
 
    <div class="sidenav-wrapper" id="sidenavWrapper">
    
      <div class="go-back-btn" id="goBack">
        <svg class="bi bi-x" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
        </svg>
      </div>

      <div class="sidenav-profile">
        <div class="sidenav-style1"></div>
       
        <div class="user-profile"><img src="android-chrome-512x512.png" alt=""/></div>
      
        <div class="user-info">
          <h6 class="user-name mb-0">Ajebo Blog</h6><span>Home of Africa's News</span>
        </div>
      </div>
 
      <ul class="sidenav-nav ps-0">
        <li><a href="/">
            Home</a></li>

        <li><a href="/entertainment">
           Entertainment</a></li>

           <li class="affan-dropdown-menu"><a href="/lifestyle">
           Lifestyle</a></li>

           <li class="affan-dropdown-menu"><a href="/fashion">
           Fashion</a></li>



        <li class="affan-dropdown-menu"><a href="/music">
           Music</a></li>


        <li><a href="/comming-soon">
            AjeboTV</a></li>


        <li><a href="/admin/add">
           Create Article</a></li>

           <li><a href="/admin/music/add">
           Create Music</a></li>


        <li><a href="/admin">
            Admin Blog</a></li>


            <li><a href="/admin/music">
            Admin Music</a></li>

           
        <li class="affan-dropdown-menu"><a href="/profile">
           Profile</a></li>

        <li>
        <div class="night-mode-nav">
            <svg width="18" height="18" viewBox="0 0 16 16" class="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
</svg>Night Mode<div class="form-check form-switch">
<input class="form-check-input form-check-success" type="checkbox" id="darkSwitch"/>
</div>
          </div>
        </li>
      </ul>
     
      <div class="social-info-wrap"><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-dribbble"></i></a></div>
    
      <div class="copyright-info">
        <p>&copy; 2021 All rights reserved by<a href="#">AjeboBlog</a></p>
      </div>
    </div>
 
 
  </>);
  delete rest.component; // eslint-disable-line no-param-reassign
  return (
    <>
    
   <div class="header-area" id="headerArea">
      <div class="container">
       
        <div class="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
         
          <div class="logo-wrapper"><a href="/"><img src="" alt=""/></a></div>
      
          <div class="navbar--toggler" id="affanNavbarToggler"><span class="d-block"></span><span class="d-block"></span><span class="d-block"></span></div>
        </div>
 
      </div>
    </div>
 
    <div class="sidenav-black-overlay"></div>
 
    <div class="sidenav-wrapper" id="sidenavWrapper">
    
      <div class="go-back-btn" id="goBack">
        <svg class="bi bi-x" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
        </svg>
      </div>

      <div class="sidenav-profile">
        <div class="sidenav-style1"></div>
       
        <div class="user-profile"><img src="android-chrome-512x512.png" alt=""/></div>
      
        <div class="user-info">
          <h6 class="user-name mb-0">Ajebo Blog</h6><span>Home of Africa's News</span>
        </div>
      </div>
 
      <ul class="sidenav-nav ps-0">
        <li><a href="/">
            Home</a></li>

        <li><a href="/entertainment">
           Entertainment</a></li>

           <li class="affan-dropdown-menu"><a href="/comming-soon">
           Lifestyle</a></li>

           <li class="affan-dropdown-menu"><a href="/fashion">
           Fashion</a></li>


        

        <li><a href="/comming-soon">
            AjeboTV</a></li>

        <li>
          <div class="night-mode-nav">
            <svg width="18" height="18" viewBox="0 0 16 16" class="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
</svg>Night Mode<div class="form-check form-switch">
<input class="form-check-input form-check-success" type="checkbox" id="darkSwitch"/>
</div>
          </div>
        </li>
      </ul>
     
      <div class="social-info-wrap"><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-dribbble"></i></a></div>
    
      <div class="copyright-info">
        <p>&copy; 2021 All rights reserved by<a href="#">AjeboBlog</a></p>
      </div>
    </div>
 
    </>
  );
};

Header.propTypes = {
  token: PropTypes.string.isRequired,
  
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  
});

export default connect(mapStateToProps)(Header);


