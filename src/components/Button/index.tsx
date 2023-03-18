import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../constants/styled.constant';

interface TextInputProps {
    buttonClassName?: string;
    disabled?: boolean;
    label: string;
    onBtnClick: () => void;
}

const StyledButton = styled.button`
    height: 35px;
    width: 120px;
    border-radius: 4px;
    font-size: 14px;
    color: #ffffff;
    border: 1px solid ${PRIMARY_COLOR};
    padding: 0 10px;
    background: #f84464;
    cursor: pointer;
    &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
`;

const Button = (props: TextInputProps) => {
    const { buttonClassName, disabled, label, onBtnClick } = props;
    return (
        <StyledButton className={buttonClassName} onClick={onBtnClick} disabled={disabled}>
            {label}
        </StyledButton>
    )
}

export default Button;