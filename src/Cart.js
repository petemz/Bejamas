function Cart(props) {
    const cart = props.items.map(item => {
        return (
            <div className="shopping-cart-item" key={item.name}>
                <div>
                    <p className="item-name">{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <img src="https://images.unsplash.com/photo-1676208994587-e8cce8951987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60" alt=""/>
            </div>
        )
    })

    return (
        <div className='shopping-cart'>{cart}</div>
        
    )
}

export default Cart