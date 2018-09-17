import React, { Component } from 'react';



class PhoneDetailComponent extends Component {


    render() {
        const details = this.props.hidden ? "hidden" : '';
        return (


            <div className={`mobile-details ${details}`} >

                <p className='mobile-details-text'>{this.props.weight}</p>
                <p className='mobile-details-text'>{this.props.sim}</p>
                <p className='mobile-details-text'>{this.props.os}</p>
                <p className='mobile-details-text'>{this.props.price}</p>

            </div >
        );
    }
}


export default PhoneDetailComponent;
