import React from 'react'

const ButtonSteps = ({show}) => {
    return (
        <div>
           <button type="button" className="btn btn-primary btn-lg pull-left" disabled={show}>Previous</button>
           <button type="button" className="btn btn-primary btn-lg pull-right">Next</button> 
        </div>
    )
}

export default ButtonSteps
