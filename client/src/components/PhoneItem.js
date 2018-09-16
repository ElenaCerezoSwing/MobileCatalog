import React, { Component } from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';



class PhoneItem extends Component {


    render() {

        return (
            <li onClick={this.props.onClick}>
                <h5>{this.props.name}</h5>
                <img src={this.props.image} alt={this.props.name} object-fit='contain'></img>

                <PhoneDetailComponent
                    weight={this.props.weight}
                    sim={this.props.sim}
                    os={this.props.os}
                    price={this.props.price}
                // hidden={this.props.hidden}
                />
            </li >
        );
    }
}


export default PhoneItem;
