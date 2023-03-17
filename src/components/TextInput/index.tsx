import React from 'react';

import styled from 'styled-components'

interface TextInputProps {
    inputClassName?: string
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
    const { inputClassName } = props
    return <StyledTextInput className={inputClassName} type="text" />
}

export default TextInput