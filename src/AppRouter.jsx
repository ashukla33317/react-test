import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const AppRouter = () => {
  return (
    <>
    {/* <Link to="/">Delveredi</Link> <br /> */}
    {/* <Link to="cancel">Cancelled/Returned</Link> <br /> */}
    {/* <Link to="sub">Subsciptions</Link> */}

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="nav-link active "  to="/">Delivered <span className='border rounded  rsd text-white' style={{background:"orange"}}>12</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav pl-5 mx-5">
        <Link className="nav-link active pl-5" aria-current="page" to="cancel" >Cancelled/Returned <span className='border rsd rounded  text-white' style={{background:"orange",font:"2"}}>12</span></Link>
        <Link className="nav-link active" to="sub">Subsciptions <span className='border rsd rounded  text-white' style={{background:"orange",font:"2"}}>12</span></Link>
        
      </div>
    </div>
  </div>
</nav>




    </>
  )
}

export default AppRouter;