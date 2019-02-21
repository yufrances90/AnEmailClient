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

    render() {
        return (
            <div>
                <CEmail email={email} />
            </div>
        );
    }
}

export default PEmail;