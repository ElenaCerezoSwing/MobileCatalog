import React, { Component } from 'react';
import axios from 'axios';
import PhoneDetailComponent from './PhoneDetailComponent'


class PhoneListContainer extends Component {
    constructor() {
        super()
        this.state = {
            catalog: [],
            hidden: true
        }
    }

    componentDidMount() {
        axios.get('/api/catalog')
            .then(response => this.setState({ catalog: response.data }, () => console.log('Catalog fetched ...', response.data)))
    }

    onHandleClick = () => {
        this.setState({ hidden: !this.state.hidden })
    }


    render() {
        return (
            <div className="mobileCard" >

                <ul>{this.state.catalog.map(mobile =>
                    <li key={mobile.id} onClick={this.onHandleClick}>
                        <h5>{mobile.name}</h5>
                        <img src={mobile.image} alt={mobile.name} object-fit='contain'></img>
                        <PhoneDetailComponent
                            weight={mobile.weight}
                            sim={mobile.sim}
                            os={mobile.os}
                            price={mobile.price}
                            hidden={this.props.hidden}
                        />

                    </li>)}
                </ul>
            </div>
        );
    }

}
export default PhoneListContainer;
