import React, {Component} from 'react';
import classes from './WorkPage.css'

import Aux from '../../hoc/Aux'

import Scrim from '../../assets/images/portPcs/scrim.png'
import GrowthPains from '../../assets/images/portPcs/growthPains.png'
import WaaaChooop from '../../assets/images/portPcs/waaachooop.png'
import BikeShare from '../../assets/images/portPcs/bikeShare.png'
import Parapug from '../../assets/images/portPcs/paraPug.png'
import Startupz from '../../assets/images/portPcs/startupz.png'

class WorkPage extends Component {
    constructor() {
        super();
        this.state = {
            workPieces: [
                {name: 'Scrim', thumbnail: Scrim},
                {name: 'Growth Pains', thumbnail: GrowthPains},
                {name: 'Waaa Choop', thumbnail: WaaaChooop},
                {name: 'Bikeshare', thumbnail: BikeShare},
                {name: 'Parapug', thumbnail: Parapug},
                {name: 'Startupz', thumbnail: Startupz},
            ]
        }
    }

    render() {
        const portfolio = (
            this.state.workPieces.map(el => {
                const thumbnail = {
                    backgroundImage: `url(${el.thumbnail})`,
                    backgroundPosition: `center`,
                    backgroundSize: `contain`,
                    backgroundRepeat: `no-repeat`
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
