import React, { Component } from 'react';
import { connect } from "react-redux";
import { showMobiles } from "../actions";
import { showMoreDetails } from "../actions";
import PhoneItem from './PhoneItem';
import PhoneDetailComponent from './PhoneDetailComponent';
import Spinner from './Spinner';

class PhoneListContainer extends Component {

    componentWillMount() {
        this.props.showMobiles();

    }

    onHandleClick = (event) => {
        this.props.showMoreDetails(event.currentTarget, PhoneDetailComponent);
    }

    renderMobileItems() {

        return this.props.catalog.map(mobile => {
            return <PhoneItem
                key={mobile.id}
                onClick={this.onHandleClick}
                name={mobile.name}
                image={mobile.image}
                weight={mobile.weight}
                sim={mobile.sim}
                os={mobile.os}
                price={mobile.price}
            // hidden={this.props.hidden}
            />
        });
    };


    render() {
        return (
            <div className='main-container'>
                {this.props.loading ? <Spinner /> : null}
                <ul>{this.renderMobileItems()}</ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        catalog: state.mobile.list,
        // hidden: state.visibility.hidden,
        loading: state.mobile.loading
    };
}

export default connect(mapStateToProps, { showMobiles, showMoreDetails })(PhoneListContainer);





