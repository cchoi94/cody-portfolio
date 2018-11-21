import React, {Component} from 'react';
import classes from './WorkPage.css'

import Aux from '../../hoc/Aux'

class WorkPage extends Component {
    constructor() {
        super();
        this.state = {
            workPieces: [
                {name: 'Scrim', thumbnail: 'https://www.placecage.com/640/360'},
                {name: 'Growth Pains', thumbnail: 'https://www.placecage.com/640/360'},
                {name: 'Waaa Choop', thumbnail: 'https://www.placecage.com/640/360'},
                {name: 'Bikeshare', thumbnail: 'https://www.placecage.com/640/360'},
                {name: 'Parapug', thumbnail: 'https://www.placecage.com/640/360'},
                {name: 'Startupz', thumbnail: 'https://www.placecage.com/640/360'},
            ]
        }
    }

    render() {
        const portfolio = (
            this.state.workPieces.map(el => {
                const thumbnail = {
                    backgroundImage: `url(${el.thumbnail})`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`
                }
                return(
                <div className={classes.PortBox} style={thumbnail}>
                    <p>{el.name}</p>
                </div>
                )
            })
        )
        return (
            <Aux>
                <h2>Works</h2>
                <div className={classes.WorkBg}>
                    {portfolio}
                </div>
            </Aux>
        )
    }
}

export default WorkPage
