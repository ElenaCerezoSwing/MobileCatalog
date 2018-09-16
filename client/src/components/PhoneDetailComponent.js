import React, { Component } from 'react';



class PhoneDetailComponent extends Component {


    render() {
        const details = this.props.hidden ? "hidden" : '';
        return (


            <div className={`mobile-details ${details}`} >

                <p>{this.props.weight}</p>
                <p>{this.props.sim}</p>
                <p>{this.props.os}</p>
                <p>{this.props.price}</p>

            </div >
        );
    }
}


export default PhoneDetailComponent;
