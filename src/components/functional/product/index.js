import React, {useState, useReducer} from 'react'
import './index.css'
import { products } from '../../../data/products';

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if(productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1);
            return update;
        default:
            return state;
    }
}

// const totalReducer = (state, action) => {
//     if(action.type === 'add') {
//         return state + action.price;
//     }
//     return state - action.price;
// }

const Products = () => {
    const [cart, setCart] = useReducer(cartReducer, []);
    // const [total, setTotal] = useReducer(totalReducer, 0);

    const currecyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    const getTotal = (cart) => {
        const total = cart.reduce((totalCost, item) => totalCost + item.price, 0)
        return total.toLocaleString('en-US', currecyOptions);
    }
    
    const add = (product) => {
        setCart({product, type: 'add'});
    }
    
    const remove = (product) => {
        setCart({product, type: 'remove'});
    }

    return (
        <div className="product-container">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(cart)}</div>
            {products.map(product => (
                <div key={product.name}>
                    <div className="product">
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                        <div>
                            <button onClick={() => add(product)}>Add</button>
                            <button onClick={() => remove(product)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;