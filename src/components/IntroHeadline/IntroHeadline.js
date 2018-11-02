import React from 'react'

import classes from './IntroHeadline.css'
import Aux from '../../hoc/Aux'

const IntroHeadline = () => {
    return(
        <Aux>
            <div className={classes.HeadlineContainer}>
                    <p>Cody <br/> Choi</p>
                <div className={classes.HeadlineBox}></div>
            </div>
        </Aux>

    )
}

export default IntroHeadline