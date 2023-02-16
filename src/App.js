import React, { useState } from 'react'
import './App.css'
import logo from "./images/logo.png"
import cartImg from "./images/cart.png"
import data from "./data"
import Shop from './Shop'
import Cart from './Cart'
import Pagination from './Pagination'


function App() {
  const products = data.products

  //let featProd 

  //for (let i = 0; i < products.length; i++) {
  //  if (products[i].featured === true) {
  //    featProd = products[i]
  //  }
  //}

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

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className='logo' src={logo} alt="BEJAMAS_"/>
        </div>

        <div onClick={toggleCartDisplay} className='shopping-cart-cntnr'>
          <img className='' src={cartImg} alt="Shopping Cart" />
          
          {cart.length > 0 && <div className='shopping-cart-size'>
            <p>{cart.length}</p>
          </div>}

          {cartDisplay && cart.length > 0 && 
            <div className='shopping-cart-disp'>
              <Cart items={cart}/>
              <button onClick={emptyCart}>Empty Cart</button>
            </div>
          }

          
        </div>
      </header>

      <hr/>
    

      <hr/>

      <Shop updateCart={updateCart} products={currentProducts}/>
      <Pagination postsPerPage={productsPerPage} totalPosts={products.length} paginate={paginate}/>
    </div>
  );
}

export default App;
