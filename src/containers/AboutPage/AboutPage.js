import React, {Component} from 'react'

import classes from './AboutPage.css'

class AboutPage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div>
                <h2>About</h2>
                {/* <div className={classes.AboutContainer}>
                    <img src={require('../../assets/images/selfPortrait.png')} alt="/"/>
                </div> */}
            </div>
        )
    }
}

export default AboutPage