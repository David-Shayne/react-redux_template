import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ComponentTemplate extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.prop}</h1>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    prop: store.primaryReducer.prop
});

export default connect(mapStoreToProps, null)(ComponentTemplate);
