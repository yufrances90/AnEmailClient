import React, { Component } from 'react';

import CEmailList from '../components/CEmailList';

import {
    getEmailsByReceiver
} from '../utils/api'

class PInbox extends Component {

    componentDidMount() {
        getEmailsByReceiver("");
    }

    render() {
        return (
            <div>
                <CEmailList />
            </div>
        );
    }
}

export default PInbox;