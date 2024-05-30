import Carousel from 'react-bootstrap/Carousel';
import './Membership.css';
import bronze from "./Assets/bronze.png";
import golden from "./Assets/golden.png";
import platinum from "./Assets/platinum.png";


const DisplayMemberships = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div 
                        className="d-block w-100 carousel-div firstMembership"
                    ></div>
                    <Carousel.Caption>
                        <img className='membershipIcon' src={bronze} alt="icon" />
                        <h2>Bronze Membership</h2>
                        <p className='membershipPar'>Unlimited access to a modern gym: Train at any convenient time using   the latest machines and equipment.</p>
                        <p className='membershipPar'>Variety of group classes: Yoga, Pilates, cardio classes, and many other    sessions to help you achieve your fitness goals with maximum comfort and enjoyment.</p>
                        <h4>Benefits</h4>
                        <ul className='membershipList'>
                            <li>Unlimited access to a modern gym</li>
                            <li>Variety of group classes</li>
                        </ul>
                        <p className='membershipPar'>Price: €50 per month</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="d-block w-100 carousel-div"
                    ></div>
                    <Carousel.Caption>
                    <img className='membershipIcon' src={golden} alt="icon" />
                        <h2>Golden Membership</h2>
                        <p className='membershipPar'>All the benefits of standard membership: Unlimited access to the gym and group classes.</p>
                        <p className='membershipPar'>Luxurious sauna: Relax and rejuvenate in our cozy sauna, perfect for unwinding after intense workouts.</p>
                        <p className='membershipPar'>Spacious pool: Swim and enjoy water workouts in our large, clean pool, ensuring complete rest and recovery.</p>
                        <h4>Benefits</h4>
                        <ul className='membershipList'>
                            <li>All the benefits of standard membership</li>
                            <li>Luxurious sauna</li>
                            <li>Spacious pool</li>
                        </ul>
                        <p className='membershipPar'>Price: €75 per month</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="d-block w-100 carousel-div"
                    ></div>
                    <Carousel.Caption>
                        <img className='membershipIcon' src={platinum} alt="icon" />
                        <h2>Platinum Membership</h2>
                        <p className='membershipPar'>All the benefits of standard membership: Unlimited access to the gym and group classes.</p>
                        <p className='membershipPar'>Luxurious sauna: Relax and rejuvenate in our cozy sauna, perfect for unwinding after intense workouts.</p>
                        <p className='membershipPar'>Spacious pool: Swim and enjoy water workouts in our large, clean pool, ensuring complete rest and recovery.</p>
                        <h4>Benefits</h4>
                        <ul className='membershipList'>
                            <li>All the benefits of gold membership</li>
                            <li>Personal training sessions</li>
                            <li>Priority booking for all classes</li>
                            <li>Elite relaxation area</li>
                        </ul>
                        <p className='membershipPar'>Price: €100 per month</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>  
    );
};

export default DisplayMemberships;