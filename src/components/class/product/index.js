import React, {Component} from 'react';
import './index.css'
import { products } from '../../../data/products';
export default class Product extends Component {
    state = {
        cart: []
    }

    currecyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    getTotal = () => {
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString('en-US', this.currecyOptions)
    }

    add = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product],
        }))
    }

    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p => p.name === product.name);
            if(productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1)
            return ({
                cart
            })
        })
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
                                    <button onClick={() => this.remove(product)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}