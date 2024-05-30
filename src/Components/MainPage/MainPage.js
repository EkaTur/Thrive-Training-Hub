import './MainPage.css';
import photo from './Assets/equipment.jpg';
import VideoComponent from './VideoComponent';

function MainPage() {

    const isMobile = window.innerWidth <= 820;

    return (
        <div>
            <div className='absoluteContainer'>
                <div className="IntroContainer">
                    <p className='introPar'>Where growth begins, and limits end!</p>
                </div>
                <div className="IntroContainer">
                    <p className='introPar'>Welcome to Thrive Training Hub, the premier fitness club where each day marks a new step towards growth, and limits are merely starting points!</p>
                </div>
            </div>
            <div className='photoOnMain'>
                <img src={photo} alt='photogym'/>
            </div>
            {isMobile ? null : <VideoComponent />}
        </div>
    )
}

export default MainPage;