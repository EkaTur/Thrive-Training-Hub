import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import './Market.css';
import Categories from "./Filter/Categories";
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function Market() {

    useLayoutEffect(() => {
        gsap.fromTo('.ProductsContainer, .CartContainer', { opacity: 0, y: 70 }, { duration: 1, y: 0, opacity: 1 });
    }, [])

    return (
        <div>
            <div className="MarketCategoriesContainer">
                <Categories />
            </div>
            <div className="MarketContainer">
                <div className="ProductsContainer">
                    <Products />
                </div>
                <div className="CartContainer">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Market;