import React, { Component } from "react";



class PhoneDetailComponent extends Component {


    render() {
        // const details = this.props.hidden ? "hidden" : "";
        return (


            <div className="mobile-details hidden" >
                <p className="mobile-details-text-title"><span className="spanned-properties">{this.props.name}</span></p>
                <p className="mobile-details-text"><span className="spanned-properties">Peso: </span>{this.props.weight}</p>
                <p className="mobile-details-text"><span className="spanned-properties">Sim: </span>{this.props.sim}</p>
                <p className="mobile-details-text"><span className="spanned-properties">Sistema Operativo: </span>{this.props.os}</p>
                <p className="mobile-details-text"><span className="spanned-properties">Precio: </span>{this.props.price}</p>

            </div >
        );
    }
}


export default PhoneDetailComponent;
