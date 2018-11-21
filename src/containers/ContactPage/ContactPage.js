import React, {Component} from 'react';

import classes from './ContactPage.css'

class ContactPage extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className={classes.ContactContainer}>
                <h2>Let's grab coffee</h2>
                <a href="mailto:hello@codychoicodes.com">hello@codychoicodes.com</a>
            </div>
        )
    }
}

export default ContactPage