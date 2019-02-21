import React, { Component } from 'react';

import  CEmailList from '../components/CEmailList';

import {
    getEmailsBySender
} from '../utils/api';
import constants from "../utils/constants";

class PSentFolder extends Component {

    state = {
        emails: []
    }

    componentDidMount() {
        getEmailsBySender(constants.CURRENT_USER).then(data => {
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
                    type={1} 
                />
            </div>
        );
    }
}

export default PSentFolder;