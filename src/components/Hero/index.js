import React, { useState } from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems,
        HeroH1, HeroP, HeroBtn } from '../Hero/heroElements';
import Sidebar from '../Sidebar';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Local Craft Butcher Shop</HeroH1>
                    <HeroP>hand-cut meats, house-made sausages 
                    and top quality ingredients</HeroP>
                    <HeroBtn>Todays Selection</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
