import styled from "styled-components"

const DropdownWrapper = styled.div`
    width: 45%;
    position: relative;
`

const DropdownSelect = styled.div`
    background-color: #E7E5EB;
    color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #C8C5D1;
    padding: 6px 7px 6px 11px;
    cursor: pointer;
`

const DropdownSelected = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
`

const DropdownCaret = styled.div`
    ${props => props.open ? 'transform: rotate(180deg);' : null}
    transition: transform .3s ease-in-out;
`

const DropdownList = styled.ul`
    list-style: none;
    background-color: #F4F3F6;
    border: 1px solid #C8C5D1;
    border-top: none;
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    transition: .3s;
    z-index: 1;
`

const DropdownItem = styled.li`
    font-weight: 400;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: #e7e5eb80;
    }
`

export {DropdownWrapper, DropdownSelect, DropdownSelected, DropdownCaret, DropdownList, DropdownItem}
