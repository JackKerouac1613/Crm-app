import Tippy from '@tippyjs/react';
import styled from 'styled-components';

const CustomTippy = styled(Tippy)`
    border-radius: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    padding: 2px;
`

const TippyWrap = styled.span`
    &:hover svg {
        fill: #6533EE;
    }

    &:not(:last-child) {
        margin-right: 5px;
    }
`

const TabledTd = styled.td`
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
`

const ColumnId = styled.td`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: gray;
    padding: 0 40px 0 20px;
`

const Time = styled.span`
    color: #B0B0B0;
`

const ActionBtnWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ActionBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    padding: 0;
    transition: color .3s ease-in-out;

    &:not(:last-child) {
        margin-right: 30px;
    }

    &:hover {
        color: ${props => props.$remove ? '#F06A4D' : '#9873FF'};
    }
`

const ContactsWrap = styled.div`
    min-width: 108px;
`

export {CustomTippy, TippyWrap, TabledTd, ColumnId, Time, ActionBtnWrapper, ActionBtn, ContactsWrap}
