import React, { Component } from 'react';

import CEmail from '../components/CEmail';

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

        console.log(emailId);
    }

    handleArchiveEmail(event) {

        const emailId = event.currentTarget.id;

        console.log(emailId);
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