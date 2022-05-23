import React, { useState } from 'react';
import './adminNavbar.css';


function NavTabs({ currentPage, handlePageChange }) {
  const [isActive, setisActive] = useState(false);
  function MouseOver(event) {
    event.target.style.background = 'Tomato';
  }
  function MouseOut(event){
    event.target.style.background="white";
  }
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        
          <a 
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger has-text-white ${isActive ? "is-active" : ""}`}
            
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <ul ><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={`${'navbar-item has-text-white'} currentPage === 'Home' 
          ? 'nav-link active' 
          : 'nav-link'  `}
            >
              Home
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#products"
              onClick={() => handlePageChange('AdminProducts')}
              className={`${'navbar-item has-text-white'} currentPage === 'AdminProducts' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Products
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#users"
              onClick={() => handlePageChange('Users')}
              className={`${'navbar-item has-text-white'} currentPage === 'Users' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Users
            </a></li><li >
            <a onMouseOver={MouseOver} onMouseOut={MouseOut}
              href="#recipes"
              onClick={() => handlePageChange('Recipes')}
              className={`${'navbar-item has-text-white'} currentPage === 'Recipes' 
          ? 'nav-link active' 
          : 'nav-link'`}
            >
              Recipes
            </a></li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}

export default NavTabs;