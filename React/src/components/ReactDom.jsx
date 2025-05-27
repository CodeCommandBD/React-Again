import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ReactDom = () => {
  return (
    <div>
      <nav className='d-flex justify-content-between bg-black'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/hero'>Hero</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/signin'>SignIn</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default ReactDom;
