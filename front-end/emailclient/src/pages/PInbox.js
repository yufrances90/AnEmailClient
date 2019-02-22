import React, { Component } from 'react';

import CEmailList from '../components/CEmailList';

import {
    getEmailsByReceiver
} from '../utils/api';
import constants from "../utils/constants";

class PInbox extends Component {

    state = {
        emails: []
    }

    _isMounted = true;

    componentDidMount() {

        const { query } = this.props;

        getEmailsByReceiver(constants.CURRENT_USER).then(data => {
            if(this._isMounted) {
                this.setState({
                    emails: (query.length === 0)? data: data.filter(obj => obj.sender === query)
                });
            }
        });
    }

    render() {

        const { emails } = this.state;

        return (
            <div>
                <CEmailList
                    emails={emails}
                    type={0}
                />
            </div>
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default PInbox;