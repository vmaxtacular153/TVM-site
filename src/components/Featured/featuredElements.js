import styled from 'styled-components';
import FeaturedPic from '../../images/beef-sausage.png';

export const FeaturedContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.1)),
    url(${FeaturedPic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(3rem, 5vw, 4rem);
    }

    p {
        margin-top: .75rem;
        margin-bottom: 1.5rem;
        font-size: clamp(1rem, 1.75vw, 2rem);
        font-weight: 500;
    }
`;

export const FeaturedButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;