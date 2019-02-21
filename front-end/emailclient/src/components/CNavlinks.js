import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CNavlinks extends Component {
    render() {
        return (
            <div className="nav-links">
                <Link to="/" className="app-link">
                    Inbox
                </Link>
                <Link to="/sent-folder" className="app-link">
                   Sent Folder
                </Link>
                <Link to="/archive" className="app-link">
                    Archive
                </Link>
            </div>
        );
    }
}

export default CNavlinks;