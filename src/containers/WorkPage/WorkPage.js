import React, {Component} from 'react';

import classes from './WorkPage.css'

class WorkPage extends Component {
    constructor() {
        super();
        this.state = {
            workPieces: [
                {name: 'Scrim', thumbnail: '/'},
                {name: 'Growth Pains', thumbnail: '/'},
                {name: 'Waaa Choop', thumbnail: '/'},
                {name: 'Bikeshare', thumbnail: '/'},
                {name: 'Parapug', thumbnail: '/'},
                {name: 'Startupz', thumbnail: '/'},
            ]
        }
    }

    render() {
        const portfolio = (
            this.state.workPieces.map(el => {
                return(
                <div className={classes.PortBox}>
                    <p>
                        {el.name}
                    </p>
                </div>
                )
            })
        )
        return (
            <div className={classes.WorkBg}>
                {portfolio}
            </div>
        )
    }
}

export default WorkPage
