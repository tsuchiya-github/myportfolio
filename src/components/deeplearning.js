import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';

class DeepLearning extends Component {
    render() {
        return(
            <div style={{backgroundColor: this.props.Color}}>
                <Grid className="projects-deep-grid">
                    <Cell col={12}>
                        <h1>{this.props.Lab}</h1>
                        <h2 style={{color: '#27221F'}}>{this.props.Title}</h2>
                    </Cell>
                    <hr />
                </Grid>
                <Grid className="projects-deep-grid">
                    <Cell col={1} hidePhone></Cell>
                    <Cell col={5} tablet={12} style={{textAlign: 'center', paddingBottom: '2em'}}>
                        <img
                            src={this.props.Left}
                            alt="avatar"
                            className="projects-img"
                        />
                    </Cell>
                    <Cell col={5} tablet={12}>
                        <p style={{fontFamily: 'Noto Sans JP'}}>{this.props.Right1}</p>
                        <p style={{fontFamily: 'Noto Sans JP'}}>{this.props.Right2}</p>
                        <p style={{fontFamily: 'Noto Sans JP'}}>{this.props.Right3}</p>
                        <a href={this.props.buttonURL} target="_blank">
                            <Button colored>{this.props.buttonName}</Button>
                        </a>
                        
                    </Cell>
                    <Cell col={1} hidePhone></Cell>
                </Grid>
            </div>
        )
    }
}

export default DeepLearning;