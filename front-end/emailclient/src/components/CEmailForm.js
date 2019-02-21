import React, { Component } from 'react';

import {
    TextField,
    Button
} from '@material-ui/core';

class CEmailForm extends Component {

    handleChange(event) {
        this.props.handleUpdate(event);
    }

    render() {

        const { 
            email, 
            title, 
            body,
            handleSubmit 
        } = this.props;

        return (
            <form>
                <TextField
                    id="email"
                    name="email"
                    label="To"
                    fullWidth
                    onChange={this.handleChange.bind(this)}
                    value={email}
                />
                <br />
                <TextField
                    id="title"
                    name="title"
                    label="Subject"
                    fullWidth
                    onChange={this.handleChange.bind(this)}
                    value={title}
                />
                <br />
                <br />
                <TextField
                    id="body"
                    name="body"
                    label="Body"
                    fullWidth
                    multiline
                    rows="10"
                    variant="outlined"
                    onChange={this.handleChange.bind(this)}
                    value={body}
                />
                <Button 
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Send
                </Button>
            </form>
        );
    }
}

export default CEmailForm;