import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalItems, getTotalPrice } from "../../../Redux/cartSlice";
import icon from "../Assets/icon.png";
import LoaderPage from "../../Loader/LoaderPage";
import { useState } from "react";
import Swal from 'sweetalert2';
import './Cart.css';

function Cart() {

    const [loader, setLoader] = useState(false);

    const cartItems = useSelector(getCartItems);

    const totalPrice = useSelector(getTotalPrice);

    const totalItems = useSelector(getTotalItems);

    const handleClick = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong, try again later!",
                confirmButtonText: 'OK',
                customClass: {
                    popup: 'my-popup-class',
                    confirmButton: 'my-confirm-button-class'
                }
            });
        }, 2000);
    };

    return (
        <div>
            <div className="CartSmallContainer">
                <h2>{totalItems} product(s) in Cart</h2>
                <h2>Total price: €{totalPrice.toFixed(2)}</h2>
                <img className="basket" src={icon} alt="icon"/>
                {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
            </div>
            <div>
                <button className="payButton" onClick={handleClick}>TO PAY</button>
            </div>
            <div className="loaderPosition">
                {loader && <LoaderPage />}
            </div>
        </div>
    )
}

export default Cart;