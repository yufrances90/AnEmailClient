import React, { Component } from 'react';

import {
    TextField
} from '@material-ui/core';

class CEmailForm extends Component {
    render() {
        return (
            <form>
                <TextField
                    id="email"
                    label="To"
                    fullWidth
                />
                <br />
                <TextField
                    id="title"
                    label="Subject"
                    fullWidth
                />
                <br />
                <br />
                <TextField
                    id="body"
                    label="Body"
                    fullWidth
                    multiline
                    rows="10"
                    variant="outlined"
                />
            </form>
        );
    }
}

export default CEmailForm;