import React from "react";

function Item(props) {
    const product = props.product

    const [over, setIsOver] = React.useState(false);
    function hvBtn() {
        setIsOver(oldValue => !oldValue)
    }
    function unhvBtn() {
        setIsOver (oldValue => !oldValue)
    }

    const handleClick = () => {
        props.updateCart(product)
        
    }

    return (
        <div className="item" onMouseEnter={hvBtn} onMouseLeave={unhvBtn}>
            <div className="item-header">
                <img className="item-img" src={props.product.image.src} alt="p" />
                {props.product.bestseller && <div className="bestseller"><span>BESTSELLER</span></div>}
                {over && <button onClick={handleClick} className="add-cart">ADD TO CART</button>}
            </div>
            <div className="item-footer">
                <span className="item-category">{props.product.category}</span>
                <h3 className="item-name">{props.product.name}</h3>
                <p className="item-price">${props.product.price}</p>
            </div>
        </div>
    )
}

export default Item