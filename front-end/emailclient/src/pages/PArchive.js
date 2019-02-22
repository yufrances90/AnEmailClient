import React, { Component } from 'react';

import CEmailList from '../components/CEmailList';

import {
    getArchivedEmails
} from '../utils/api';
import constants from "../utils/constants";

class PArchive extends Component {

    state = {
        emails: []
    }

    _isMounted = true;

    componentDidMount() {

        const { query } = this.props;

        getArchivedEmails(constants.CURRENT_USER).then(data => {
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
                    type={2}
                />
            </div>
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default PArchive;