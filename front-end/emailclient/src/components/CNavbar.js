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

        const { handleChangeEmail, query } = this.props;

        return (
            <div className="app-navbar">
                <AppBar position="static">
                    <Toolbar className="app-toolbar">
                        <Typography variant="title" color="inherit">
                            Email Client
                        </Typography>
                        <CNavlinks />
                        <CSearchBar 
                            handleChangeEmail={handleChangeEmail}
                            query={query}
                        />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;