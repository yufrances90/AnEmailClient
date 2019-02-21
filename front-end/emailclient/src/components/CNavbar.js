import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

class CNavbar extends Component {

    render() {

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Email Client
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;