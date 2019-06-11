import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={this.props.linkphoto} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.tieude}</h5>
                            <p className="card-text">{this.props.chitiet}</p>
                            <a href="#" className="btn btn-primary">Something</a>
                            <a href="#" className="btn btn-success">Detail</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Card;