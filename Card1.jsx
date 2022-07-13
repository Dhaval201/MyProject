import React, { Component } from 'react'

export class Card1 extends Component {

    constructor(props){
        console.log('Hello');
        super(props)
    }

    render() {
        return (
        <div className="col-md-4 p-1">
            <div className="card">
                <img className="card-img-top" width="100%" src={this.props.img} alt={this.props.alt} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text">{this.props.desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>

        </div>
        )
    }
}

export default Card1
