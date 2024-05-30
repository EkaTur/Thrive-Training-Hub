import './Cart.css';

function ChangeQuantity({ quantity, setQuantity }) {
    
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div>
            <div className='quantityFlexContainer'>
                <button className='quantityButton' onClick={removeQuantity}>-</button>
                <p className='quantityPar'>{quantity}</p>
                <button className='quantityButton' onClick={addQuantity}>+</button>
            </div>
        </div>
    )
}

export default ChangeQuantity;