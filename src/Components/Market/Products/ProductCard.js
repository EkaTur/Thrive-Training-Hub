import { useNavigate, useParams } from "react-router-dom";
import { productsData } from "./productsData";
import './Products.css';

function ProductCard() {

    const { title } = useParams();
    const navigate = useNavigate();

    return (
        <div className="CardContainer"> 
            {productsData.filter((item) => item.title === title).map((element, index) => {
                return (
                    <div key={index}>
                        <h2>{element.name}</h2>
                        <img className="cardPhoto" src={element.image} alt='product' width='400px' height='500px' />
                        <div>
                            <ul>
                                {element.description.map((item, id) => (
                                <li className="cardList" key={id}>{item}</li>
                            ))}
                        </ul>
                        </div>
                        <h3>Extra information</h3>
                        <ul>
                            {element.extraInfo.map((item, id) => (
                                <li className="cardList" key={id}>{item}</li>
                            ))}
                        </ul>
                        <button className="cardButton" onClick={() => navigate(-1)}>BACK</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard;