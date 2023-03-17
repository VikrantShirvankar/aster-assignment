import React from 'react'

import { StyledLoaderWrapper, StyledLoader } from './styled'

interface LoaderProps {
    wrapperHeight?: number
    label?: string
}

const Loader = (props: LoaderProps) => {
    const { wrapperHeight, label } = props
    return (
        <StyledLoaderWrapper wrapperHeight={wrapperHeight}>
            <StyledLoader />
            {label && <span>{label}</span>}
        </StyledLoaderWrapper>
    )
}

export default Loader;