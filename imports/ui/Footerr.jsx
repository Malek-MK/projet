import React from 'react'
import { Link } from 'react-router-dom';

const Footerr = () => {
    return (
        <div>
            <footer className="bg-light mt-5">
            <div className="d-flex justify-content-between">
            <div>
            <p><span className="text-secondary">{new Date().getFullYear()} ©</span><Link className="text-decoration-none text-dark" to="/home"><i> SpeedSolution</i></Link></p>
            </div>
            <div>
                <Link className="text-decoration-none text-secondary" style={{marginRight:15}} to="/about">About Us</Link>
                <Link className="text-decoration-none text-secondary" style={{marginRight:15}} to="/terms-and-conditions">Terms and conditions</Link>
                <Link className="text-decoration-none text-secondary" to="/contact">Contact</Link>
            </div>
            </div>
            </footer>
        </div>
    )
}

export default Footerr
