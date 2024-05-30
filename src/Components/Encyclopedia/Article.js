import { useParams, useNavigate } from "react-router-dom";
import { articles } from "./articles";

function Article() {

    const { title } = useParams();
    const navigate = useNavigate();

    return (
        <div className="ArticleBigContainer">
            {articles.filter((item) => item.title === title).map((element, index) => {
                return (
                    <div key={index}>
                        <h3 className="articleHeader">{element.name}</h3>
                        <img className="articlePhoto" src={element.image} alt='article' />
                        <div>
                            {element.description.map((item, id) => (
                                <p className="articlePar" key={id}>{item}</p>
                            ))}
                        </div>
                        <button className="articleButton" onClick={() => navigate(-1)}>BACK</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Article;