import React, {Component} from 'react';

import classes from './LandingPage.css'
import ParticlesBg from '../../components/Particles/Particles'
import Headline from '../../components/IntroHeadline/IntroHeadline'

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className={classes.LandingPageContainer}>
                <ParticlesBg />
                <Headline />
                <h1>Front End Developer</h1>
            </div>
        )
    }
}

export default LandingPage