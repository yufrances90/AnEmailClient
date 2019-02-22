import React, { Component, Fragment } from 'react';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch 
} from 'react-router-dom';

import './App.css';

import CNavbar from './components/CNavbar';
import CCreateBtn from './components/CCreateBtn';
import PInbox from './pages/PInbox';
import PSentFolder from './pages/PSentFolder';
import PArchive from './pages/PArchive';
import PEmail from './pages/PEmail';
import PCreate from './pages/PCreate';

class App extends Component {

    state = {
        query: ""
    }

    handleChangeEmail(event) {
        this.setState({
            query: event.currentTarget.value
        });
    }

    render() {

        const { query } = this.state;

        return (
            <Router>
                <Fragment>
                    <CNavbar 
                        handleChangeEmail={this.handleChangeEmail.bind(this)}
                        query={query}
                    />
                    <div className="app-body">
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                component={() => <PInbox query={query} />}
                            />
                            <Route 
                                path="/sent-folder" 
                                component={() => <PSentFolder query={query} />}
                            />
                            <Route 
                                path="/archive" 
                                component={() => <PArchive query={query} />}
                            />
                            <Route path="/emails/:email_id" component={PEmail} />
                            <Route path="/create" component={PCreate} />
                        </Switch>
                    </div>
                    <CCreateBtn />
                </Fragment>
            </Router>
        );
    }
}

export default App;
