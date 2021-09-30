import React, {Component} from 'react';
import './index.css'

export default class Product extends Component {
    render() {
        return (
            <div className="product-container">
                <div>
                    Shopping Cart: 0 total items
                </div>
                <div>Total: 0</div>
                <div className="product">
                    <span role="img" aria-label="ice cream">🍦</span>
                    <button>Add</button><button>Remove</button>
                </div>
            </div>
        )
    }
}