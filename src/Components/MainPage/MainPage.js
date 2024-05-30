import './MainPage.css';
import video from './Assets/video.mp4';
import photo from './Assets/equipment.jpg';

function MainPage() {

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
            <div className='videoContainer'>
                <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default MainPage;