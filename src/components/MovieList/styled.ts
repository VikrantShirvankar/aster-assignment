import styled from 'styled-components';
import { SCREEN_BREAK_POINTS } from '../../constants/styled.constant';

export const StyledListWrapper = styled.ul `
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: ${SCREEN_BREAK_POINTS.MOBILE}) {
        justify-content: center;
    }
`;

export const StyledErrorMessage = styled.div `
    margin-left: 16px;
    margin-top: 16px;
`;