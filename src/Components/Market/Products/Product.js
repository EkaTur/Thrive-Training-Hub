import { useState } from "react";
import { Link } from "react-router-dom";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Redux/cartSlice";

function Product({ product }) {

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    return (
        <div>
            <div className="productContainer">
                <Link className="productLink" to={`/market/${product.title}`}>
                    <h2>{product.name}</h2>
                    <img className="productPhoto" src={product.image} alt="" />
                    <p className="productIntro">{product.intro}</p>
                    <p className="productPrice">€{product.price}</p>
                    <p className="phoneBlock">Click to read about</p>
                </Link>
                
                <div className="AddContainer">
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                    <button className="addToCartButton" onClick={() =>{dispatch(addItemToCart({product, quantity}))}}>ADD TO CART</button>
                </div>
                
            </div>
        </div>
    )
}

export default Product;