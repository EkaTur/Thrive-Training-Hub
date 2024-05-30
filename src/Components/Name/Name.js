import './Name.css';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function Name() {

    useLayoutEffect(() => {
        gsap.fromTo('.TTH', {opacity: 0, scale:0.5}, {opacity: 1, scale: 1, duration: 2})
    }, [])

    return (
        <div className="NameContainer">
            <Link className='nameHeader' to="/">
                <h1 className='TTH'>{'[    Thrive Training Hub    ]'}</h1>
            </Link>
        </div>
    )
}

export default Name;