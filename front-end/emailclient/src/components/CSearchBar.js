import React, { Component } from 'react';

import { 
    IconButton, 
    InputBase 
} from '@material-ui/core';
import {
    Search
} from '@material-ui/icons';

class CSearchBar extends Component {
    render() {
        return (
            <div className="app-searchbox">
                <IconButton className="navbar-icon">
                    <Search />
                </IconButton>
                <InputBase 
                    placeholder="Search…"
                    className="search-box"
                />
            </div>
        )
    }
}

export default CSearchBar;