import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import { Link } from 'react-router-dom';

class CEmailList extends Component {
    render() {
        return (
            <div className="email-list">
                <Grid container>
                    <Grid item xs={3}>
                        email 
                    </Grid>
                    <Grid item xs={9}>
                        <Link to="/emails/:email_id">
                            Title
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CEmailList;