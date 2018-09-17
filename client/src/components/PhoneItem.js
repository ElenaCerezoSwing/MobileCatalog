import React, { Component } from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';



class PhoneItem extends Component {


    render() {

        return (
            <li className="phoneitem-li-container" onClick={this.props.onClick}>
                <h5 className="mobile-name">{this.props.name}</h5>
                <img className='mobile-image' src={this.props.image} alt={this.props.name} object-fit='contain'></img>

                <PhoneDetailComponent
                    name={this.props.name}
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
