import React, { Component } from 'react';
import PhoneDetailComponent from './PhoneDetailComponent'
import { connect } from "react-redux";
import { showMobiles } from "../actions";
import { showMoreDetails } from "../actions";

class PhoneListContainer extends Component {

    componentWillMount() {
        this.props.showMobiles();
    }

    onHandleClick = () => {
        this.props.showMoreDetails();
    }

    renderMobileItems() {
        return this.props.catalog.map(mobile => {
            return (
                <li key={mobile.id} onClick={this.onHandleClick}>
                    <h5>{this.props.name}</h5>
                    <img src={mobile.image} alt={mobile.name} object-fit='contain'></img>
                    <PhoneDetailComponent
                        weight={mobile.weight}
                        sim={mobile.sim}
                        os={mobile.os}
                        price={mobile.price}
                        hidden={this.props.hidden}
                    />
                </li>)
        });
    };
    render() {
        return (
            <div>

                <ul>{this.renderMobileItems()}</ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        catalog: state.mobile.list,
        hidden: state.visibility.hidden
    };
}

export default connect(mapStateToProps, { showMobiles, showMoreDetails })(PhoneListContainer);





