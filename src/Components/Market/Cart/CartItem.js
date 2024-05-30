import { productsData } from "../Products/productsData";
import { useDispatch } from "react-redux";
import { removeItemFromCart, decreaseItemQuantity } from "../../../Redux/cartSlice";

function CartItem({ cartItem }) {
    
    const products = productsData.find(item => item.id === cartItem.productId);

    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decreaseItemQuantity({ productId: cartItem.productId }));
    };

    return (
        <div>
            <div className="CartItemContainer">
                <p className="productsNamePar">{products.name}</p>
                <p>{cartItem.quantity} piece(s)</p>
                <p className="pricePar">€{(products.price * cartItem.quantity).toFixed(2)}</p>
                <button className="removeOneButton" onClick={handleDecrease}>REMOVE ONE</button> 
                <button className="deleteButton" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>DELETE PRODUCT</button>
            </div>
        </div>
    )
}

export default CartItem;