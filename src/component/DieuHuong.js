import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Partner from './Partner';
import Contact from './Contact';
import List from './List';

class DieuHuong extends Component {
    render() {
        return (
            <div>
                

                    <Route exact path="/" component={List} />
                    <Route exact path="/home" component={List} />
                    <Route exact path="/partner" component={Partner} />
                    <Route exact path="/contact" component={Contact} />
                
            </div>
        );
    }
}

export default DieuHuong;