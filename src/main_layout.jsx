import { useEffect } from "react";
import SideBar from "./components/sidebar";
import Topbar from "./components/topbar";
import { Outlet, useLocation,useNavigate } from "react-router-dom";

import CardDashboard from "./components/dashboard/cardDashoard";
import { fetchData } from "./utils/thunkApi";
import { useDispatch } from "react-redux";

const Layout = () => {
  const location = useLocation();

  const navigate=useNavigate()
  const checkPath = location.pathname !== "/";
  useEffect(()=>{
    
    const token= JSON.parse(localStorage.getItem('details'))?.Token
    if( !token){
      navigate('/signin')
    }

 
  },[])
  // useEffect(()=>{

  // },)
  return (
    <>
      <body
        class="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col=""
      >
        {/* <!-- BEGIN: Header--> */}
        {/* // top bar  */}
        <Topbar />

        {/* <!-- END: Header--> */}

        {/* <!-- BEGIN: Main Menu--> */}

        {/* // side bar   */}
        <SideBar />
        
        {/* <!-- END: Main Menu--> */}
        {/* <!-- BEGIN: Content--> */}
        <div class="app-content content ">
          <div class="content-overlay"></div>
          <div class="header-navbar-shadow"></div>
          {checkPath ? <Outlet /> : <CardDashboard/>}
        </div>
        {/* <!-- END: Content--> */}

        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>

        {/* <!-- BEGIN: Footer--> */}
    
        {/* <!-- END: Footer--> */}
      </body>
    </>
  );
};
export default Layout;
