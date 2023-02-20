import React, { useState } from 'react'
import './App.css'
import logo from "./images/logo.png"
import cartImg from "./images/cart.png"
import data from "./data"
import Shop from './Shop'
import Cart from './Cart'
import Featured from './Featured'


function App() {
  const products = data.products

  const [cart, setCart] = useState([])
  function updateCart(prod) {
    setCart(prev => [...prev, prod])
  }
  const [cartDisplay, setCartDisplay] = useState(false)
  function toggleCartDisplay () {
    if (cart.length > 0) {
      setCartDisplay(prevVal => !prevVal)
    }
  }
  function emptyCart () {
    setCart([])
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className='logo' src={logo} alt="BEJAMAS_"/>
        </div>

        <div onClick={toggleCartDisplay} className='shopping-cart-cntnr'>
          <img className='' src={cartImg} alt="Shopping Cart" />
          
            <div className='shopping-cart-size'>
              <p>{cart.length}</p>
            </div>


          {cartDisplay && cart.length > 0 && 
            <div className='shopping-cart-disp'>
              <Cart items={cart}/>
              <button onClick={emptyCart}>Empty Cart</button>
            </div>
          }

          
        </div>
      </header>

      <hr/>
    
      <Featured info={products[0]}/>

      <hr/>

      <Shop updateCart={updateCart} products={products}/>
    </div>
  );
}

export default App;
