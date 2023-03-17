import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../styled.constant'

export const StyledLoaderWrapper = styled.div<any>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${(props) => props.wrapperHeight}px;
    span {
        margin-top: 15px;
    }
`
export const StyledLoader = styled.div `
    border: 5px solid #E7E9EB;
    border-radius: 50%;
    border-top: 5px solid ${PRIMARY_COLOR};
    width: 50px;
    height: 50px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`