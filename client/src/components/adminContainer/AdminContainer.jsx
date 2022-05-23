import React, { useState } from 'react';
import NavTabs from '../adminNavbar/adminNavbar';
import AdminProducts from '../adminProducts/AdminProducts';
import Users from '../Users';
import Home from '../Home'
import './adminContainer.css';
import Recipes from '../Recipes';

export default function AdminContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AdminProducts') {
      return <AdminProducts />;
    }
    if (currentPage === 'Recipes') {
        return <Recipes />;
      }
    return <Users />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
    </div>
  );
}