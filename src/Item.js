import React from "react";

function Item(props) {

    const [over, setIsOver] = React.useState(false);
    function hvBtn() {
        setIsOver(oldValue => !oldValue)
    }
    function unhvBtn() {
        setIsOver (oldValue => !oldValue)
    }

    const prod = props.info
    const handleClick = () => {
        props.updateCart(prod)
    } 

    return (
        <div className="item" onMouseEnter={hvBtn} onMouseLeave={unhvBtn}>
            <div className="item-header">
                <img className="item-img" src="https://images.unsplash.com/photo-1486578077620-8a022ddd481f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt={props.info.image.alt} />
                {props.info.bestseller && <div className="bestseller"><span>BESTSELLER</span></div>}
                {over && <button onClick={handleClick} className="add-cart">ADD TO CART</button>}
            </div>
            <div className="item-footer">
                <span className="item-category">{props.info.category}</span>
                <h3 className="item-name">{props.info.name}</h3>
                <p className="item-price">${props.info.price}</p>
            </div>
        </div>
    )
}

export default Item