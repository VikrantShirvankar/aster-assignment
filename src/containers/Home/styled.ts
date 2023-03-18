import styled from 'styled-components'

import { PRIMARY_COLOR } from '../../constants/styled.constant'

export const StyledHomeWrapper = styled.div `
    margin: 0;
    padding-bottom: 40px;
`;

export const StyledContentWrapper = styled.div `
    max-width: 1200px;
    margin: 0 auto;
`;

export const StyledContentHeading = styled.div `
    font-size: 20px;
    font-weight: 700;
    margin-left: 16px;
    margin-top: 10px;
`

export const StyledBackBtn = styled.div `
    font-size: 14px;
    margin-left: 16px;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
    color: ${PRIMARY_COLOR};
    text-decoration: underline;
`