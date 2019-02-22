import React, { Component } from 'react';

import { 
    IconButton, 
    InputBase
} from '@material-ui/core';
import {
    Search
} from '@material-ui/icons';

class CSearchBar extends Component {

    handleChangeSearchQuery(event) {
       this.props.handleChangeEmail(event);
    }

    render() {

        const { query } = this.props;

        return (
            <div className="app-searchbox">
                <IconButton 
                    className="navbar-icon"
                    disabled
                >
                    <Search />
                </IconButton>
                <InputBase 
                    placeholder="Search…"
                    className="search-box"
                    onChange={this.handleChangeSearchQuery.bind(this)}
                    value={query}
                />
            </div>
        )
    }
}

export default CSearchBar;