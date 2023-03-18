import React from 'react';

import styled from 'styled-components';

interface TextInputProps {
    inputClassName?: string;
    value?: string;
    placeholder?: string;
    onTextChange: (text: string) => void;
}

const StyledTextInput = styled.input`
    height: 35px;
    width: 550px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid rgb(238, 238, 238);
    padding: 0 10px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`;

const TextInput = (props: TextInputProps) => {
    const { inputClassName, value, placeholder, onTextChange } = props;
    return (
        <StyledTextInput 
            placeholder={placeholder}
            value={value}
            className={inputClassName} 
            type="text"
            onChange={(e) => onTextChange(e.target.value)}

        />
    )
}

export default TextInput