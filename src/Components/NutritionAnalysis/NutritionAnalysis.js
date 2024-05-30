import { useEffect, useState } from "react";
import NutritionDisplay from "./NutritionDisplay";
import LoaderPage from "../Loader/LoaderPage";
import Swal from 'sweetalert2';
import './Analysis.css';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function NutritionAnalysis() {

    const [search, setSearch] = useState('');
    const [myAnalysis, setMyAnalysis] = useState();
    const [wordSubmitted, setWordSubmitted] = useState('');
    const [stateLoader, setStateLoader] = useState(false);

    useLayoutEffect(() => {
        gsap.fromTo('.ResultContainer', { opacity: 0 }, { duration: 2, opacity: 1 });
    }, [wordSubmitted])

    const newAnalysis = async (ingr) => {

        setStateLoader(true);

        const response = await fetch('https://api.edamam.com/api/nutrition-details?app_id=1717402d&app_key=a33ee8175d76232d902379bd4ec5a3c4%09', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ingr})
        });
        if (response.ok) {
            setStateLoader(false);
            const info = await response.json();
            setMyAnalysis(info);
        } else {
            setStateLoader(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingredients entered incorrectly. Example: 1 banana!",
                confirmButtonText: 'OK',
                customClass: {
                    popup: 'my-popup-class',
                    confirmButton: 'my-confirm-button-class'
                }
            });
        }
    }

    useEffect(() => {
    if (wordSubmitted !== '') {
        let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
        newAnalysis(ingr);
    }
    
    }, [wordSubmitted]);
    
    const productSearch = (e) => {
        setSearch(e.target.value);
    }

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(search);
    }

    return (
        <div>
            {stateLoader && <LoaderPage />}
            
            <div className="AnalysisHeaderContainer">
                <h2>Conduct food analysis to prepare the best balanced menu</h2>
            </div>
            <div className='FormContainer'>
                <form onSubmit={finalSearch}>
                    <input className='input' placeholder='Type here ...' onChange={productSearch} value={search}></input>
                    <button className='analysisButton' onClick={finalSearch}>SEARCH</button>
                </form>
            </div>
            <div className='ResultContainer'>
                {
                    myAnalysis && Object.values(myAnalysis.totalNutrients).map(({label, quantity, unit}) => 
                        <NutritionDisplay
                        key={label}
                        label={label}
                        quantity={quantity}
                        unit={unit}/>
                    )
                }
            </div>
        </div>
    )
}

export default NutritionAnalysis;