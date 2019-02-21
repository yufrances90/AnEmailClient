import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
    Edit
} from '@material-ui/icons'
import { 
    IconButton 
} from '@material-ui/core';

class CCreateBtn extends Component {
    render() {
        return (
            <div>
                <Link to="/create">
                    <IconButton className="edit-btn">
                        <Edit />
                    </IconButton>
                </Link>
            </div>
        );
    }
}

export default CCreateBtn;