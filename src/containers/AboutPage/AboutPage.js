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
                <div className={classes.AboutPageContent}>
                    <div className={classes.AboutPortrait}></div>
                    <div className={classes.SkillSet}>
                        <p>Skills</p>
                        <ul>
                            <li>
                                <img src={require('../../assets/images/icons/react.png')}  alt="Angular"/>
                            </li>
                            <li>
                                <img src={require('../../assets/images/icons/angular.png')}  alt="Angular"/>
                            </li>
                            <li>
                                <img src={require('../../assets/images/icons/javascript.png')}  alt="Angular"/>
                            </li>
                            <li>
                                <img src={require('../../assets/images/icons/es6.png')}  alt="Angular"/>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src={require('../../assets/images/icons/html.png')}  alt="Angular"/>
                            </li>
                            <li>
                                <img src={require('../../assets/images/icons/css.png')}  alt="Angular"/>
                            </li>
                            <li>
                                <img src={require('../../assets/images/icons/sass.png')}  alt="Angular"/>
                            </li>
                            <li>
                                <img src={require('../../assets/images/icons/git.png')}  alt="Angular"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage