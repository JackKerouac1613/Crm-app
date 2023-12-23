import React, { useState } from "react"
import Svg from "../icon/Svg"
import { DropdownWrapper, DropdownSelect, DropdownSelected, DropdownCaret, DropdownList, DropdownItem } from './style'


const INITIAL_ITEM = {
    phone: 'Телефон',
    additionalPhone: 'Доп. телефон',
    email: 'Email',
    vk: 'Vk',
    facebook: 'Facebook'
}

const Dropdown = ({valueHandler, dropValue}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    const selectValueHandler = (e) => {
        valueHandler(e.target.textContent)
        openHandler()
    }

    const createDropdownItem = () => {
        const arrItems = Object.values(INITIAL_ITEM)
        return arrItems.map((item) => {
            if(item !== dropValue) {
                return (
                    <DropdownItem
                        key={item}
                        onClick={selectValueHandler}
                    >
                        {item}
                    </DropdownItem>
                )
            }

            return null
        })
    }

    return (
        <DropdownWrapper>
            <DropdownSelect
                onClick={openHandler}
            >
                <DropdownSelected>
                    {dropValue}
                </DropdownSelected>
                <DropdownCaret
                    open={isOpen}
                >
                    <Svg name={'arrow'}/>
                </DropdownCaret>
            </DropdownSelect>
            {isOpen && (
                <DropdownList>
                    {createDropdownItem()}
                </DropdownList>
            )}
        </DropdownWrapper>
    )
}

export default Dropdown;
