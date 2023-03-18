import styled from 'styled-components'
import { SCREEN_BREAK_POINTS } from '../../constants/styled.constant'

export const StyledHeaderWrapper = styled.div`
    min-height: 80px;
    width: 100%;
    background: rgb(51, 53, 69);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    @media (max-width: 550px) {
        flex-direction: column;
    } 
    .search-input {
        @media (max-width: ${SCREEN_BREAK_POINTS.TABLET}) {
            width: 350px ;
        } 
        @media (max-width: ${SCREEN_BREAK_POINTS.MOBILE}) {
            width: 80%;
        } 
    };
    .search-button {
        margin-left: 20px;
        @media (max-width: 550px) {
            margin-left: 0px;
            margin-top: 20px;
        } 
    }
`;