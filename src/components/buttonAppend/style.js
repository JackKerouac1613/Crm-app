import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #9873FF;
    background-color: transparent;
    padding: 12.5px 26.5px;
    font-weight: 600;
    font-size: 14px;
    color: #9873FF;
    line-height: 19px;
    transition: color .3s ease-in-out, background-color .3s ease-in-out;

    &:hover {
        background-color: #8052FF;
        color: white;
    }

    &:hover svg {
        fill: #FFFFFF;
    }
`

export default Button
