import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';
import { 
    Email, 
    Title 
} from '@material-ui/icons';

class CEmail extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={4}>
                    <p>
                        <Email /> francesyu90@yahoo.com
                    </p>
                    <p>
                        <Title /> Title
                    </p>
                </Grid>
                <Grid item xs={8}>
                    <p>
                        body
                    </p>
                </Grid>
            </Grid>
        );
    }
}

export default CEmail;