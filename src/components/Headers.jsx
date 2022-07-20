import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
export default function Headers() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <Link to="/" className="navbar-brand mx-5">Resume Builder | Website</Link>
        <div className="link-group mx-auto" style={{ position: 'relative', left: '350px', display: 'flex' }}>
           <Link className='nav-link text-white' to="/">Home</Link>
           <Link className='nav-link text-white mx-3' to="/Forms">Make Resume</Link>
            <Link to="/Resume" className='nav-link text-white mx-2'>View resume</Link>
            <Outlet />
          </div>
      </nav>
      
    </div>
  )
}
