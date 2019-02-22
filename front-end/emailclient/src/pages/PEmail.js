import React, { Component } from 'react';

import CEmail from '../components/CEmail';

import {
    deleteEmailById,
    archiveEmailById
} from '../utils/api';

class PEmail extends Component {

    state = {
        email: {}
    }

    componentDidMount() {

        const { location } = this.props;

        const { email } = location.state;

        this.setState({
            email
        });
    }

    handleDeleteEmail(event) {
        
        const emailId = event.currentTarget.id;

        const reqObj = {
            operationType: "1",
            emailId
        }

        console.log(reqObj);

        deleteEmailById(reqObj);
    }

    handleArchiveEmail(event) {

        const emailId = event.currentTarget.id;

        const reqObj = {
            operationType: "2",
            emailId
        }

        console.log(reqObj);

        archiveEmailById(reqObj);
    }

    render() {

        const { email } = this.state;
        
        return (
            <div>
                <CEmail 
                    email={email}
                    handleDeleteEmail={this.handleDeleteEmail.bind(this)} 
                    handleArchiveEmail={this.handleArchiveEmail.bind(this)}
                />
            </div>
        );
    }
}

export default PEmail;