import React from 'react'

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { StyledHeaderWrapper } from './styled'

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <TextInput 
                inputClassName="search-input" 
                placeholder='Search for Movies, Events, Plays, Sports and Activities'
                onTextChange={(text) => console.log(text)}
            />
            <Button buttonClassName="search-button" onBtnClick={() => console.log('btn clicked >>')} />
        </StyledHeaderWrapper>
    )
}

export default Header;