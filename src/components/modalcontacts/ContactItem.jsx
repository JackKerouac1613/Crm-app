import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import Svg from "../icon/Svg";
import { AnimatePresence } from "framer-motion";
import { Item, Input, CancelBtn, CustomTippy } from "./style";


const ContactItem = ({id, contactState, onContactHandler}) => {
    const [isVisible, setIsVisible] = useState(true)

    const inpValueHandler = (e) => {
        onContactHandler('CHANGE_OBJ', {
            id: id,
            type: e.target.value,
            value: contactState.value
        })
    }

    const dropValueHandler = (value) => {
        onContactHandler('CHANGE_OBJ', {
            id: id,
            type: contactState.type,
            value: value
        })
    }

    const removeContact = () => {
        setIsVisible(false)

        onContactHandler('REMOVE_OBJ', id)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <Item
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Dropdown
                        dropValue={contactState.value}
                        valueHandler={dropValueHandler}
                    />
                    <Input
                        value={contactState.type}
                        onChange={inpValueHandler}
                    />
                    {contactState.type.length > 0 && (
                        <CustomTippy
                            key={id}
                            content={'Удалить контакт'}
                        >
                            <CancelBtn
                                onClick={removeContact}
                            >
                                <Svg
                                    name={'CancelContact'}
                                />
                            </CancelBtn>
                        </CustomTippy>
                    )}
                </Item>
            )}
        </AnimatePresence>
    )
}

export default ContactItem;
