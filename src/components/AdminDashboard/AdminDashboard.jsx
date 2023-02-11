import React from "react";
import './AdminDashboard.css'
import image from './img1dash.png'
import image2 from './img2dash.png'
import {TbReportMoney, TbTruckLoading, TbUsers, TbTimeline, TbReportSearch, TbArrowsRightLeft,TbPhone, TbBrandFacebook, TbBrandTwitter, TbBrandInstagram} from "react-icons/tb"
import { Link } from "react-router-dom";

function AdminDashboard() {
 

    return (
     
       <body>

<div class="wrapper">
    <div class="sidebar">
        <h2>ADMIN DASHBOARD</h2>
        <ul> 
          <Link to= "/inconstruction"><li><a><TbReportMoney/><i></i> Sales</a></li></Link>
          <Link to= "/productform"><li><a><TbTruckLoading/><i></i> Investment</a></li></Link>
          <Link to= "/inconstruction"><li><a><TbUsers/><i></i> Users</a></li></Link>
          <Link to= "/inconstruction"><li><a><TbTimeline/><i></i> Stadistics</a></li></Link>
          <Link to= "/inconstruction"><li><a><TbReportSearch/><i></i> Reporting</a></li></Link>
          <Link to= "/inconstruction"><li><a><TbArrowsRightLeft/><i></i> Transactions</a></li></Link>
          <Link to= "/inconstruction"><li><a><TbPhone/><i></i> Contacts</a></li></Link>
             
        </ul> 
        <div class="social_media">
        <Link to= "/inconstruction"> <a href="#"><TbBrandFacebook/><i class="fab fa-facebook-f"></i></a></Link>
        <Link to= "/inconstruction"><a href="#"><TbBrandTwitter/><i class="fab fa-twitter"></i></a></Link>
        <Link to= "/inconstruction"><a href="#"><TbBrandInstagram/><i class="fab fa-instagram"></i></a></Link>
      </div>
    </div>
    <div class="main_content">
      <div className="info">
        <div className="images">
          <img src={image} alt="Girl in a jacket" width="1000" height="280"></img>
          <img src={image2} alt="Girl in a jacket" width="1000" height="280"></img>
        </div>
      </div>
    </div>
</div>

</body>
    
    );
  }
  
  export default AdminDashboard;