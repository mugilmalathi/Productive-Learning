import React from "react";
import "./nav.scss";
import { DiAppstore } from "react-icons/di";

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="navbar">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="navbar-header">
                <button
                  class="navbar-toggle"
                  data-target="#mobile_menu"
                  data-toggle="collapse"
                  style={{border:"1px solid #337ab7"}}
                >
                  <span class="icon-bar" style={{backgroundColor:"#337ab7"}}></span>
                  <span class="icon-bar" style={{backgroundColor:"#337ab7"}}></span>
                  <span class="icon-bar" style={{backgroundColor:"#337ab7"}}></span>
                </button>
                <a href="#" class="navbar-brand">
                  <DiAppstore 
                    style={{
                        fontSize:"30px"
                    }}
                  />
                </a>
              </div>

              <div class="navbar-collapse collapse" id="mobile_menu">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="#" style={{color:"#000000"}}>Home</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{color:"#000000"}}>
                      About Us <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#" >About One</a>
                      </li>
                      <li>
                        <a href="#">About Two</a>
                      </li>
                      <li>
                        <a href="#">About Three</a>
                      </li>
                      <li>
                        <a href="#">About Four</a>
                      </li>
                      <li>
                        <a href="#">About Five</a>
                      </li>
                      <li>
                        <a href="#">About Six</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" style={{color:"#000000"}}>Courses</a>
                  </li>
                  <li>
                    <a href="#" style={{color:"#000000"}}>Services</a>
                  </li>
                  <li>
                    <a href="#" style={{color:"#000000"}}>Tools</a>
                  </li>
                  <li>
                    <a href="#" style={{color:"#000000"}}>Contact Us</a>
                  </li>
                </ul>
                <ul class="nav navbar-nav">
                  <li>
                    <form action="" class="navbar-form">
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            type="search"
                            name="search"
                            id=""
                            placeholder="Search Courses Here..."
                            class="form-control"
                          />
                          <span class="input-group-addon" style={{backgroundColor:"#337ab7"}}>
                            <span class="glyphicon glyphicon-search" style={{color:"#ffffff"}}></span>
                          </span>
                        </div>
                      </div>
                    </form>
                  </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <a href="#" style={{color:"#000000"}}>
                      <span class="glyphicon glyphicon-user"></span> Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{color:"#000000"}}>
                      <span class="glyphicon glyphicon-log-in"></span> Login /
                      Sign Up <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Sign Up</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
