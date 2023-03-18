import React from 'react';

import TextInput from '../TextInput';
import Button from '../Button';
import { StyledHeaderWrapper } from './styled'

interface HeaderProps {
    searchInputValue: string;
    disabledSearchButton: boolean;
    onSearchInputValueChange: (text: string) => void
    searchBtnClickHandler: () => void;
}

const Header = (props: HeaderProps) => {
    const { 
        searchInputValue,
        disabledSearchButton,
        searchBtnClickHandler,
        onSearchInputValueChange
    } = props;

    return (
        <StyledHeaderWrapper>
            <TextInput 
                inputClassName="search-input" 
                placeholder='Search for Movies, Events, Plays, Sports and Activities'
                value={searchInputValue}
                onTextChange={(text) => onSearchInputValueChange(text)}
            />
            <Button 
                label="Search"
                disabled={disabledSearchButton}
                buttonClassName="search-button" 
                onBtnClick={() => searchBtnClickHandler()}
            />
        </StyledHeaderWrapper>
    )
}

export default Header;