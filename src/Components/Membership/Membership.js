import './Membership.css';
import DisplayMemberships from "./DisplayMemberships";
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function Membership() {

    useLayoutEffect(() => {
        gsap.fromTo('.CarouselContainer', { opacity: 0 }, { delay: 0.5, duration: 1, opacity: 1 });
    }, [])

    return (
        <div>
            <div className="MembershipHeaderContainer">
                <h2>OUR MEMBERSHIP</h2>
            </div>
            <div className="MembershipIntroContainer">
                <h4>Choose the one that suits you and come to our fitness club to discuss all the details with the manager or immediately buy a membership.</h4>
            </div>
            <div className="CarouselFlexContainer">
                <div className="CarouselContainer">
                    <DisplayMemberships />
                </div>
            </div>
        </div>
    )
}

export default Membership;