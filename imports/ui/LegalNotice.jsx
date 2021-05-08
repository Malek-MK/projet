import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const LegalNotice = () => {
    return (
        <div>
          <NavBar/> 
          <br></br><br></br>
            <div className="container mt-5">
            <h3 className="text mt-5 text-center mb-5">Legal Notice</h3>
            <h5>This site is edited by:</h5>
            <p className="text-secondary mt-3">
            Pixelium
            </p>
            <p className="text-secondary mt-3">
            Khezama
            </p>
            <p className="text-secondary mt-3">
            Sousse
            </p>
            <p className="text-secondary mt-3 mb-5">
            Tunis
            </p>
            <h5>Publication Director :</h5>
            <p className="text-secondary mt-3 mb-5">
            Pixelium
            </p>
            <h5>This site is hosted by:</h5>
            <p className="text-secondary mt-3 mb-5">
            <b>software development box : </b> Pixelium
            </p>
            </div> 
            <Footer/>
        </div>
    )
}

export default LegalNotice
