function Cart(props) {
    const cart = props.items.map(item => {
        return (
            <div className="shopping-cart-item" key={item.name}>
                <div>
                    <p className="item-name">{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <img src={item.image.src} alt={item.image.alt}/>
            </div>
        )
    })

    return (
        <div className='shopping-cart'>{cart}</div>
        
    )
}

export default Cart