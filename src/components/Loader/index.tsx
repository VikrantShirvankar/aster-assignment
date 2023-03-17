import React from 'react'

import { StyledLoaderWrapper, StyledLoader } from './styled'

interface LoaderProps {
    wrapperHeight?: number
}

const Loader = (props: LoaderProps) => {
    const { wrapperHeight } = props
    return (
        <StyledLoaderWrapper wrapperHeight={wrapperHeight}>
            <StyledLoader />
        </StyledLoaderWrapper>
    )
}

export default Loader;