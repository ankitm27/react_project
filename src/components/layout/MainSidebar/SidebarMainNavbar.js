import React from "react";
//import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";

class SidebarMainNavbar extends React.Component {   

  render() {
    const myValText = ".1.";
    return (
	 <span>{myValText}
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "25px" }}
                src={require("../../../images/shards-dashboards-logo.svg")}
                alt="Shards Dashboard"
              />
                <span className="d-none d-md-inline ml-1">
                  Boiler.Master
              </span>              
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline "
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div></span> 
    );
  }
}
 

export default SidebarMainNavbar;
