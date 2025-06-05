import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import './Layout.css'

function Layout() {
  return (
    
    <>
      <Navbar />
        <Outlet />
        </>
    
  );
}

export default Layout;