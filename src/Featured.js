import { useState } from "react"

function Featured(props) {

    const [cart, setCart] = useState([])
    
    function handleClick() {
        setCart(prevCart => [prevCart.push("jack")])
        console.log(cart)
    }

    console.log()


    return (
        <section >
            <div className='ft-photo'>
                <div className='top'>
                    <p>{props.info.name}</p>
                    <button onClick={handleClick}>ADD TO CART</button>
                </div>

                <div className='potd-container'>
                    <img src="https://images.pexels.com/photos/3631659/pexels-photo-3631659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className='tag'>
                        <span>Photo of the day</span>
                    </div>
                </div>
            </div>

            <div className="ft-desc">
                <div className="ft-details">
                    <div className="main-desc">
                        <h3>About the Samurai King Resting</h3>
                        <p>Pets</p>
                        <p>{props.info.details.description}</p>
                    </div>

                    
                    <div className="ft-photo-details">
                        <h3>Details</h3>
                        <p>Dimensions: {props.info.details.dimensions.width} x {props.info.details.dimensions.height} pixels</p>
                        <p>Size: {props.info.details.size}</p>
                    </div>
                </div>

                <div className="side-buy">
                    <div className="related">
                        <h3>People also buy</h3>
                        <div className="related-buys">
                            <img src="https://images.unsplash.com/photo-1631610755561-fd05c1395fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=632&q=80" alt="" />
                            <img src="https://images.unsplash.com/photo-1618984265001-4198e2d91963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />
                            <img src="https://images.unsplash.com/photo-1630687224019-0070a41d0ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured