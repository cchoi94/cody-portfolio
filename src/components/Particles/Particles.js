import React, {Component} from 'react';

import classes from './Particles.css'
import Particles from 'react-particles-js'
import Aux from '../../hoc/Aux'

class ParticlesBg extends Component {

    render() {
        return(
            <Aux>
                <Particles 
                    className={classes.ParticleContainer}
                    canvasClassName={classes.ParticleCanvas}
                    params={{
                        "particles": {
                            "number": {
                                "value": 500,
                                "density": {
                                    "enable": true,
                                }
                            },
                            "size": {
                                "value": 2,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 3,
                                "direction": "random",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse",
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "bubble"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 400,
                                    "duration": 0.3,
                                    "size": 2.5,
                                    "opacity": 1,
                                },
                                "repulse": {
                                    "distance": 90,
                                    "duration": 0.2
                                }
                            }
                        }
                    }} 
                />
            </Aux>
        )
    }
}

export default ParticlesBg