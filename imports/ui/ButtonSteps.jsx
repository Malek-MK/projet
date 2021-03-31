import React from 'react'

const ButtonSteps = ({ show, setShow}) => {
    const bNext = 'next'
    const bprev = 'prev'
    const handleClickN = () => {
 
        if (show === 'step1' && bNext) {
            setShow('step2')
        }
        if (show === 'step2' && bNext) {
            setShow('step3')
        }
        
    }
    const handleClickP = () => {
        if (show === 'step2' && bprev) {
            setShow('step1')
        }
        if (show === 'step3' && bprev) {
            setShow('step2')
        }
    }

    return (
        <div>
            {show === 'step1' ? <button type="button" name='next' className="btn btn-primary btn-lg pull-right" onClick={handleClickN} >Next</button> : null}
            {show === 'step2' ? <div>
                <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={handleClickP} >Previous</button>
                <button name='next' className="btn btn-primary btn-lg pull-right" onClick={handleClickN} >Next</button>
            </div> : null}
            {show === 'step3' ? <div>
                <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={handleClickP} >Previous</button>
            </div> : null}

        </div>
    )
}

export default ButtonSteps
