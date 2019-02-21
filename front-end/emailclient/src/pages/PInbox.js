import React, { Component } from 'react';

import CEmailList from '../components/CEmailList';

import {
    getEmailsByReceiver
} from '../utils/api'

class PInbox extends Component {

    state = {
        emails: []
    }

    componentDidMount() {
        getEmailsByReceiver("").then(data => {
            this.setState({
                emails: data
            })
        });
    }

    render() {

        const { emails } = this.state;

        return (
            <div>
                <CEmailList
                    emails={emails} 
                />
            </div>
        );
    }
}

export default PInbox;