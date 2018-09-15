import React, { Component } from 'react';
import axios from 'axios';
import './mobile.css';

class Mobile extends Component {
    constructor() {
        super()
        this.state = {
            catalog: []
        }
    }

    componentDidMount() {
        axios.get('/api/catalog')
            .then(response => this.setState({ catalog: response.data }, () => console.log('Catalog fetched ...', response.data)))
    }


    render() {
        return (
            <div className="mobileCard" >
                <h4>Mobile Catalog</h4>
                <ul>{this.state.catalog.map(mobile =>
                    <li key={mobile.id}>
                        <h5>{mobile.name}</h5>
                        <img src={mobile.image} alt={mobile.name} object-fit='contain'></img>
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
