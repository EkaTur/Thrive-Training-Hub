import './App.css';
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import NutritionAnalysis from './Components/NutritionAnalysis/NutritionAnalysis';
import Encyclopedia from './Components/Encyclopedia/Encyclopedia';
import Article from './Components/Encyclopedia/Article';
import ClassesAndFacilities from './Components/ClassesAndFacilities/ClassesAndFacilities';
import Contacts from './Components/Contacts/Contacts';
import Membership from './Components/Membership/Membership';
import Market from './Components/Market/Market';
import ProductCard from './Components/Market/Products/ProductCard';
import Name from './Components/Name/Name';
import CursorHighlight from './CursorHighlight/CursorHighlight';
import LoaderPage from './Components/Loader/LoaderPage';
import gsap from 'gsap';
import { MenuButton } from './Components/MenuButton/MenuButton';

function App() {

  const [isOpen, setOpen] = useState(false);
  
  const appearLink = () => {
    gsap.fromTo('.linkNav', { opacity: 0 }, { delay: 0.5, duration: 1, stagger: 0.5, opacity: 0.6 });
  }

  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    if (!loader) {
      appearLink();
    }
  }, [loader, isOpen]); 

  useEffect(() => {
    const hideLoader = setTimeout(() => {
      setLoader(false);
    }, 1500);

    return () => clearTimeout(hideLoader);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      {loader ? (<LoaderPage />) : (
        <div>
          <div>
            <CursorHighlight />
          </div>
          <Router>
            <Name />
            <div className='NavContainer'>
              <nav className={`AppNav ${isOpen ? 'open' : ''}`}>
                <NavLink className='linkNav' activeClassName="active" onClick={handleLinkClick}  to='/about'>Classes and Facilities</NavLink>
                <NavLink className="linkNav" activeClassName="active" onClick={handleLinkClick} to='membership'>Memberships</NavLink>
                <NavLink className='linkNav' activeClassName="active" onClick={handleLinkClick} to='/contacts'>Contacts</NavLink>
                <NavLink className='linkNav' activeClassName="active" onClick={handleLinkClick} to='/analysis'>Nutrition Analysis</NavLink>
                <NavLink className='linkNav' activeClassName="active" onClick={handleLinkClick} to='/market'>Our products</NavLink>
                <NavLink className='linkNav' activeClassName="active" onClick={handleLinkClick} to='/encyclopedia'>Healthy encyclopedia</NavLink>
              </nav>
              <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
            </div>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<ClassesAndFacilities />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/analysis" element={<NutritionAnalysis />} />
              <Route path="/market" element={<Market />} />
              <Route path="/encyclopedia" element={<Encyclopedia />} />
              <Route path="/encyclopedia/:title" element={<Article />} />
              <Route path="/market/:title" element={<ProductCard />} />
            </Routes>
          </Router>
      </div>)}
    </div>
  );
}

export default App;
