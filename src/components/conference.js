import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Conference extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p style={{fontFamily: 'Noto Sans JP'}}>{this.props.Date}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px', fontFamily: 'Noto Sans JP'}}>{this.props.conferenceName}</h4>
                    <p style={{fontFamily: 'Noto Sans JP'}}>{this.props.conferenceDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Conference;