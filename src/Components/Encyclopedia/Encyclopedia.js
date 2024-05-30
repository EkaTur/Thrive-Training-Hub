import { Link } from "react-router-dom";
import { articles } from "./articles";
import './Encyclopedia.css';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function Encyclopedia() {

    useLayoutEffect(() => {
        gsap.fromTo('.EncyclopediaBigContainer', { opacity: 0, y: 70 }, { duration: 1, y: 0, opacity: 1 });
    }, [])

    return (
        <div className="EncyclopediaBigContainer">
            <div className="EncyclopediaFlexContainer">
                {
                    articles.map((article => {
                        const { id, name, intro } = article;
                        return (
                            <div className="EncyclopediaSmallContainer" key={id}>
                                <Link className="articleLink" to={`/encyclopedia/${article.title}`}>
                                    <h3 className="articleHeader">{name}</h3>
                                    <p className="articleIntroPar">{intro}</p>
                                    <p className="clickPar">Click to know more</p>
                                </Link>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default Encyclopedia;