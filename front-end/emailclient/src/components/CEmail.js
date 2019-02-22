import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';
import { 
    Email, 
    Title,
    AccessTime 
} from '@material-ui/icons';

import {
    formatDate
} from '../utils/helpers';

class CEmail extends Component {
    render() {

        const { email } = this.props;

        return (
            <Grid container>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <Grid container>
                        <Grid item xs={4}>
                            <p>
                                <Email /> {email.sender}
                            </p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <Title /> {email.title}
                            </p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <AccessTime /> {formatDate(email.createdAt)}
                            </p>
                        </Grid>
                    </Grid>
                    <hr />
                    <p>
                        {email.body}
                    </p>
                </Grid>
            </Grid>
        );
    }
}

export default CEmail;