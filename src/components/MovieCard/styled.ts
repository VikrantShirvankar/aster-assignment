import styled from 'styled-components';
import { PRIMARY_COLOR, SCREEN_BREAK_POINTS } from '../../constants/styled.constant';

export const StyledCardWrapper = styled.li `
    display: flex;
    padding: 16px;
    box-sizing: border-box;
    @media (min-width: ${SCREEN_BREAK_POINTS.MOBILE}) {
        width: 50%;
    }
    @media (min-width: ${SCREEN_BREAK_POINTS.LAPTOP}) {
        width: 33.3333%;
    }
`;

export const StyledCard = styled.div `
    background-color: '#ffffff;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const StyledCardPoster = styled.div `
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }
`;

export const StyledCardContent = styled.div `
    padding: 16px;
    background: linear-gradient(to bottom left, ${PRIMARY_COLOR} 40%, #FFC39E 100%);
`;

export const StyledCardTitle = styled.h2 `
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
`;

export const StyledCardDescription = styled.p `
    color: #ffffff;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;    
    font-weight: 400;
`;

export const StyledCardTitleWrapper = styled.div `
    height: 50px;
`;