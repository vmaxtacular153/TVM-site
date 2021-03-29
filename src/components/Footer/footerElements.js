import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    padding: 20px 0;
    background-color: #fff;
`;

export const FooterWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    text-align: center;
    padding-bottom: 25px;
    max-width: 13px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #4b4c4d;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;: bold;
`;

export const SocialIcons = styled.div`
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #4b4c4d;
    font-size: 24px;
`;
