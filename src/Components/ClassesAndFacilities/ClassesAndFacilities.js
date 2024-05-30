import { useLayoutEffect, useMemo, useState } from "react";
import { facilitiesData } from "./facilitiesData";
import './Facilities.css';
import gsap from 'gsap';

function ClassesAndFacilities() {

    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    useLayoutEffect(() => {
        gsap.fromTo('.ClassesSmallContainer', { opacity: 0 }, { delay: 0.5, duration: 1, opacity: 1 });
    }, [search])

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(text);
    }

    const filteredData = useMemo(() => facilitiesData.filter((facility) => {
        return facility.name.toLowerCase().includes(search.toLowerCase())
    }), [search])

    return (
        <div className="ClassesMainCOntainer">
            <div className="HeaderClassesContainer">
                <h2>Group Classes and Facilities</h2>
                <h5 className="classesIntro">Welcome to our Fitness Programs and Amenities section! Here, you'll find everything you need for a great workout and relaxation. Explore our fun group classes and our top-notch gym equipment. Plus, take a dip in our pool for a refreshing swim and chill out in our cozy sauna for some relaxation time. It's all about making your fitness journey enjoyable and easy!</h5>
            </div>
            <div className="ClassesFormContainer">
                <form onSubmit={handleSearch}>
                    <input className="classesInput" type='text' placeholder="Type here ..." value={text} onChange={handleText} />
                    <button className="classesButton" type='button' onClick={handleSearch}>SEARCH</button>
                </form>
            </div>
            <div className="ClassesBigContainer">
                <div className="ClassesFlexContainer">
                {
                    filteredData.map((facility, index) => {
                        return (
                            <div className="ClassesSmallContainer" key={index}>
                                <div>
                                    <div>
                                        <img className="facilityPhoto" src={facility.image} alt="facility"/>
                                    </div>
                                    <div>
                                        <h3>{facility.name}</h3>
                                        <p>{facility.description}</p>
                                        <ul>
                                            {facility.time.map((item, id) => (
                                                <li key={id}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default ClassesAndFacilities;