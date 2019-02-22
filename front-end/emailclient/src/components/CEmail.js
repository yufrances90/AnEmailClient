import React, { Component } from 'react';

import {
    Grid,
    Button
} from '@material-ui/core';
import { 
    Email, 
    Title,
    AccessTime,
    Delete,
    Archive 
} from '@material-ui/icons';

import {
    formatDate
} from '../utils/helpers';

class CEmail extends Component {

    handleDeleteBtnClick(event) {
        this.props.handleDeleteEmail(event);
    }

    handleArchiveBtnClick(event) {
        this.props.handleArchiveEmail(event);
    }

    render() {

        const { email } = this.props;

        return (
            <div>
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
                        <hr />
                        <div>
                            <Grid container>
                                <Grid item xs={9}>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        onClick={this.handleDeleteBtnClick.bind(this)}
                                        id={email._id}
                                    >
                                        <Delete /> Delete
                                    </Button>
                                    <Button
                                        onClick={this.handleArchiveBtnClick.bind(this)}
                                        id={email._id}
                                    >
                                        <Archive /> Archive
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CEmail;