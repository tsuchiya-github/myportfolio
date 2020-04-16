import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from './../images/me.JPG';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12} tablet={12} phone={12}>
                        <img
                            src={me}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Haruki Tsuchiya</h1>

                            <hr/>

                            <p>I am a master's student from Chubu University, studying deep learning in computer vision.</p>

                            <div className="social-links">

                                {/* twitter */}
                                <a href="https://twitter.com/1ha1ru0ki1" target="_blank">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                                {/* facebook */}
                                <a href="https://www.facebook.com/1ha1ru0ki1" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                                {/* instagram */}
                                <a href="https://www.instagram.com/1ha1ru0ki1/" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                                {/* github */}
                                <a href="https://github.com/tsuchiya-github/" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;