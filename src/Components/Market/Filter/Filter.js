import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../../Redux/productsSlice";
import './Filter.css';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function Filter({ category }) {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    useLayoutEffect(() => {
        gsap.fromTo('.categoryButton, .categoryButtonSelected', { opacity: 0 }, { duration: 1, stagger: 0.5, opacity: 1 });
    }, [])

    return (
        <div>
            <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? "categoryButtonSelected" : "categoryButton"}>{category}</p>
        </div>
    )
}

export default Filter;