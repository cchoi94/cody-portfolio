import React from 'react';

import classes from './Particles.css'
import Particles from 'react-particles-js'
import Aux from '../../hoc/Aux'

const ParticlesBg = (props) => {
    return(
        <Aux>
            <Particles 
                className={classes.Particles}
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
                                "mode": "bubble",
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 200,
                                "duration": 0.5,
                                "size": 2.5,
                                "opacity": 1,
                            },
                            "repulse": {
                                "distance": 300,
                                "duration": 0.2
                            }
                        }
                    }
                }} 
            />
        </Aux>
    )
}

export default ParticlesBg