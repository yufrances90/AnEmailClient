import React, { Component } from 'react';

import {
    Edit
} from '@material-ui/icons'
import { IconButton } from '@material-ui/core';

class CCreateBtn extends Component {
    render() {
        return (
            <div>
                <IconButton className="edit-btn">
                    <Edit />
                </IconButton>
            </div>
        );
    }
}

export default CCreateBtn;