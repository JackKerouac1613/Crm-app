import styled from "styled-components";
import Tippy from '@tippyjs/react';
import { motion } from "framer-motion";

const ContactBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${props => props.open ? '26px 30px' : '8px 20px'};
    width: 100%;
    background-color: rgba(200, 197, 209, 0.3);
    margin-bottom: ${props => props.$warning ? '0' : '25px'};
`

const ContactWrapper = styled.div`
    width: 100%;
    ${props => props.open ? 'margin-bottom: 25px;' : null}

    & input {
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        border: 1px solid #C8C5D1;
        border-left: none;
        padding: 8px 12px;
    }
`

const ContactBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #333333;
    transition: color .3s ease-in-out;

    &:hover {
        color: #9873FF;
    }
`
const Item = styled(motion.div)`
    position: relative;
    max-width: 390px;
    display: flex;

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`

const Input = styled.input`
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    border: 1px solid #C8C5D1;
    border-left: none;
    padding: 8px 12px;

    &:focus-visible {
        outline: none;
    }
`

const CancelBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E7E5EB;
    border: 1px solid #C8C5D1;
    margin-left: -1px;
    transition: border .3s ease-in-out;

    &:hover {
        border-color: #F06A4D;
    }

    &:hover svg {
        fill: #F06A4D;
    }
`

const CustomTippy = styled(Tippy)`
    border-radius: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    padding: 2px;
`

export {ContactBlock, ContactWrapper, ContactBtn, Item, Input, CancelBtn, CustomTippy}
