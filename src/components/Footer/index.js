import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './footerElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo tp='/'>Sausage</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/'
                                            target='_blank'
                                            aria-label='Facebook'
                                            rel='noopener noreferrer'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/'
                                            target='_blank'
                                            aria-label='Instagram'
                                            rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
