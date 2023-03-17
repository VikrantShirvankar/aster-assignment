import React from 'react'

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { StyledHeaderWrapper } from './styled'

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <TextInput inputClassName="search-input" />
            <Button buttonClassName="search-button" />
        </StyledHeaderWrapper>
    )
}

export default Header;