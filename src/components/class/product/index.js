import React, {Component} from 'react';
import './index.css'
import { products } from '../../../data/products';
export default class Product extends Component {
    state = {
        cart: [],
        total: 0
    }

    currecyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    add = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product.name],
            total: state.total + product.price
        }))
    }

    remove = () => {
        this.setState({
            cart: [],
            total: 0
        })
    }

    getTotal = () => {
        return this.state.total.toLocaleString('en-US', this.currecyOptions)
    }
    
    render() {
        return (
            <div className="product-container">
                <h1>Products</h1>
                <div>
                    Shopping Cart: {this.state.cart.length} total items
                </div>
                <div>Total ${this.getTotal()}</div>
                    {products.map(product => (
                        <div key={product.name}>
                            <div className="product">
                                <span role="img" aria-label={product.name}>{product.emoji}</span>
                                <div>
                                    <button onClick={() => this.add(product)}>Add</button>
                                    <button onClick={this.remove}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}