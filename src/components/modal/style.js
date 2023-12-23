import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalBack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.6);
    z-index: 1;
    display: grid;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`

const ModalWindow = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    z-index: 10;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 17px -7px rgba(34, 60, 80, 0.2);
    ${props => props.$delete ? 'padding: 25px 80px;' : null}
`

const ModalWrapper = styled.div`
    width: 100%;
    padding: 25px 30px;


    & h2 {
        display: inline-block;
        margin: 0 9px 15px 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
    }

    & p {
        display: inline-block;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #B0B0B0;
    }
`

const ErrorWrapper = styled.div`
    margin: 8px 0;
    max-width: 255px;
    display: flex;
`

const Error = styled.p`
    color: #F06A4D;
    text-align: center;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    margin-bottom: 0px;
`

const ModalButtonClose = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
`

const ModalBtnDo = styled.button`
    border: none;
    color: #FFFFFF;
    background-color: rgba(152, 115, 255, 1);
    padding: 12.5px 35px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 5px;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: #8052FF;
    }
`

const ModalBtnCancel = styled.button`
    border: none;
    background-color: transparent;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #333333;
    margin-bottom: 25px;
`

export {ModalBack, ModalWindow, ModalWrapper, ErrorWrapper, Error, ModalButtonClose, ModalBtnDo, ModalBtnCancel}
