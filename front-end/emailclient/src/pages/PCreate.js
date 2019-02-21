import React, { Component } from 'react';
import CEmailForm from '../components/CEmailForm';

class PCreate extends Component {

    state = {
        email: "",
        title: "",
        body: ""
    }

    handleUpdate(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        const { email, title, body } = this.state;

        const obj = {
            receiver: email,
            sender: "test@yahoo.ca",
            title,
            body
        }

        console.log(obj);
    }

    render() {

        const { email, title, body } = this.state;

        return (
            <div>
                <CEmailForm 
                    email={email}
                    title={title}
                    body={body}
                    handleUpdate={this.handleUpdate.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                />
            </div>
        );
    }
}

export default PCreate;