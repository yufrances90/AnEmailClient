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

    componentDidMount() {
        getArchivedEmails(constants.CURRENT_USER).then(data => {
            this.setState({
                emails: data
            });
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
}

export default PArchive;