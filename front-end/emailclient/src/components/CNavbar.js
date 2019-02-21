import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

import CSearchBar from './CSearchBar';
import CNavlinks from './CNavlinks';

class CNavbar extends Component {

    render() {

        return (
            <div className="app-navbar">
                <AppBar position="static">
                    <Toolbar className="app-toolbar">
                        <Typography variant="title" color="inherit">
                            Email Client
                        </Typography>
                        <CNavlinks />
                        <CSearchBar />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;