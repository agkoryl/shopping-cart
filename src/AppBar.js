import React from 'react';
import './AppBar.css'

import { connect } from 'react-redux';


class AppBar extends React.Component {

    
    calculateCartTotal() {
        return this.props.cart.reduce((sum, product) => { return sum + product.price}, 0)
    }

    render() {
        return (
            <div className="app-bar-container">
            <div>
            <div className="cart-sum">TOTAL: {this.calculateCartTotal()}</div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(AppBar);