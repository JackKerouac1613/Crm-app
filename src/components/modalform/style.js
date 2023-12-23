import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;

    & label {
        position: relative;
        padding: 13px 0 16px 0;
    }

    & label:last-child {
        padding: 13px 0 0 0;
    }
`

const Label = styled.label`
    display: block;
    position: relative;
`

const Placeholder = styled.span`
    color: #B0B0B0;
    font-size: 14px;
    left: 2px;
    line-height: 19px;
    pointer-events: none;
    position: absolute;
    top: 18px;
    transition: all .2s ease-in-out;

    &::before {
        content: '*';
        position: absolute;
        right: -10px;
        color: #9873ff;
    }

    ${props => props.$active ? 'font-size: 11px; transform: translateY(-100%); &::before { right: -6px; }' : null}
`

export {Form, Label, Placeholder}
