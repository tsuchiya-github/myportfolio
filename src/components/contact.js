import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import contact from './../images/contact.JPG';
import line from './../images/line.png';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} tablet={12} phone={12}>
                        <h2>Haruki Tsuchiya</h2>
                        <img
                            src={contact}
                            alt="avatar"
                            style={{height: '400px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Pls feel free to contact me!</p>

                    </Cell>
                    <Cell col={6} tablet={12} phone={12}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        tp19014-0984@sti.chubu.ac.jp
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <img
                                        src={line}
                                        alt="avatar"
                                        />
                                        1ha1ru0ki1
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;