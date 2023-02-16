import React, { useState, useEffect } from "react"
import Item from "./Item"

function Shop(props) {
    const products = props.products
    const [renderedProducts, setRenderedProducts] = useState(props.products)
    useEffect(() => {
        setRenderedProducts(props.products);
    }, [props.products])

    const [sortType, setSortType] = useState("default")

    const productByName = [...products].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    const productByPrice = [...products].sort((a, b) => a.price - b.price)

    function reverseArrangement() {
        setRenderedProducts([...renderedProducts].reverse())
    }

    const items = renderedProducts.map(product => {
        return (
            <Item key={product.name} updateCart={props.updateCart}  info={product} />
        )
    })


    function handleChange(event) {
        const { value } = event.target
        setSortType(value)
        if (value === "name") {
            setRenderedProducts(productByName)
        } else if (value === "price") {
            setRenderedProducts(productByPrice)
        } else {
            setRenderedProducts(products)
        }
    }


    //Spreading the array to avoid mutating the original array
    

    return (
        <section className="shop">
            <div className="sort">
                <p>Photography / <span>Premium Photos</span></p>

                <div className="sort-icon">
                    <div onClick={reverseArrangement} className="reverse-arrangement">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"></path></svg>
                    </div>

                    <label>Sort By</label>
                    <select name="sorts" id="sorts" value={sortType} onChange={handleChange}>
                        <option value="default">Default</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>

            <div className="shop-items">
                <div className="sidebar">
                    <div className="top-filter">
                        <p>Category</p>
                        <div className="checkers">
                            <input type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">Premium</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="horns" name="horns" />
                            <label htmlFor="horns">People</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">Pets</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="horns" name="horns" />
                            <label htmlFor="horns">Food</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="horns" name="horns" />
                            <label htmlFor="horns">Landmarks</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">Cities</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="horns" name="horns" />
                            <label htmlFor="horns">Nature</label>
                        </div>
                    </div>

                    <hr/>

                    <div className="bottom-filter">
                        <p>Price range</p>
                        <div className="checkers">
                            <input type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">Scales</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="horns" name="horns" />
                            <label htmlFor="horns">Horns</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">Scales</label>
                        </div>

                        <div className="checkers">
                            <input type="checkbox" id="horns" name="horns" />
                            <label htmlFor="horns">Horns</label>
                        </div>
                    </div>
                </div>

                <div className="main-shop">{items}</div>
            </div>
        </section>
    );
}

export default Shop