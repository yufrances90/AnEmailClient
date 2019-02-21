import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from '@material-ui/core';
import {
    Menu
} from '@material-ui/icons';
import CSearchBar from './CSearchBar';

class CNavbar extends Component {

    render() {

        return (
            <div className="app-navbar">
                <AppBar position="static">
                    <Toolbar className="app-toolbar">
                        {/* <IconButton className="navbar-icon">
                            <Menu />
                        </IconButton> */}
                        <Typography variant="title" color="inherit">
                            Email Client
                        </Typography>
                        <CSearchBar />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;