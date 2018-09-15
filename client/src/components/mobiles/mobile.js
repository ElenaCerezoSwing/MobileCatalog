import React, { Component } from 'react';
import './mobile.css';

class Mobile extends Component {
    constructor() {
        super()
        this.state = {
            catalog: []
        }
    }

    componentDidMount() {
        fetch('/api/catalog')
            .then(res => res.json())
            .then(catalog => this.setState({ catalog }, () => console.log('Catalog fetched ...', catalog)))
    }

    render() {
        return (
            <div className="mobileCard" >
                <h4>Mobile Catalog</h4>
                <ul>{this.state.catalog.map(mobile =>
                    <li key={mobile.id}>
                        <h5>{mobile.name}</h5>
                        <p>{mobile.weight}</p>
                        <p>{mobile.sim}</p>
                        <p>{mobile.os}</p>
                        <p>{mobile.price}</p>
                    </li>)}</ul>
            </div>
        );
    }
}

export default Mobile;
