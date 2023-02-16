import React from 'react'
import Item from './Item'

const Fruits = ({fruits}) => {
    const items = renderedProducts.map(product => {
        return (
            <Item key={product.name} updateCart={props.updateCart}  info={product} />
        )
    })
}

export default Fruits