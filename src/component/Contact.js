import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        Name:
    <input type="text" name="name" className="form-control" />
                        NumberPhone:
    <input type="number" name="phone" className="form-control" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;