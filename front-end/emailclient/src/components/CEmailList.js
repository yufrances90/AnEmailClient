import React, { Component } from 'react';

import { Grid, LinearProgress } from '@material-ui/core';

import { Link } from 'react-router-dom';

class CEmailList extends Component {
    render() {

        const { emails, type } = this.props;

        if (emails.length === 0) {
            return <LinearProgress />
        }

        return (
            <div className="email-list">
                    {
                        emails.map((email) => (
                            <Grid container key={email._id}>
                                <Grid item xs={3}>
                                    {type === 0? email.sender : email.receiver} 
                                </Grid>
                                <Grid item xs={9}>
                                    <Link 
                                        to={{
                                            pathname: `/emails/${email._id}`,
                                            state: {
                                                email
                                            }
                                        }}
                                    >
                                        {email.title}
                                    </Link>
                                </Grid>
                            </Grid>
                        ))
                    }
            </div>
        );
    }
}

export default CEmailList;