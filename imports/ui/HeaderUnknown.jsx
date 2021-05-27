import React from 'react'
import { Link } from 'react-router-dom';

const HeaderUnknown = () => {
    return (
        
            <div className="div fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light  ">

                    <Link className="navbar-brand text-dark " to="/home"><i className="fa fa-balance-scale"></i>Community</Link>
               
                
                    <div className="position-absolute top-5 end-0">
                                <ul className="navbar-nav topnav">
                                    <li className="nav-item" style={{marginRight:15}}>
                                        <Link className="btn btn-light" to="/signin"><i class="fa fa-user-plus fa-2x text-info" aria-hidden="true"></i></Link>
                                     </li>
                                </ul>
                            </div>
                    
                </nav>
            </div>
        
    )
}

export default HeaderUnknown
