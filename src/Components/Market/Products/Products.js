import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../../Redux/productsSlice";
import Product from "./Product";
import { productsData } from "./productsData";
import './Products.css';

function Products() {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="allProducts">
            {
                productsData.filter(product => {
                    if (selectedCategory === 'ALL') return true;
                    return selectedCategory === product.category;
                }).map(product => <Product product={product} />)
            } 
        </div>
    )
}

export default Products;