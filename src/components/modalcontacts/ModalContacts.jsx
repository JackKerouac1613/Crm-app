import { useState, useEffect } from "react";
import ContactItem from './ContactItem'
import Svg from '../icon/Svg';
import { ContactBlock, ContactWrapper, ContactBtn } from "./style";


const ModalContacts = ({itemContacts, statusError, onItemHandler}) => {
    const [openBlock, setOpenBlock] = useState(false);

    const addContactHandler = () => {
        const itemObj = {
            id: Math.round(Math.random() * 1000000),
            type: '',
            value: 'Телефон'
        }

        onItemHandler('APPEND_OBJ', itemObj)
    }

    useEffect(() => {
        if(itemContacts.length < 1) {
            setOpenBlock(false)
        } else setOpenBlock(true)
    }, [itemContacts])

    return (
        <ContactBlock
            open={openBlock}
            $warning={statusError}

        >
            {openBlock && (
                <ContactWrapper
                    open={openBlock}
                >
                    {itemContacts.map(obj => {
                        return (
                            <ContactItem
                                contactState={obj}
                                key={obj.id}
                                id={obj.id}
                                onContactHandler={onItemHandler}
                            />
                        )
                    })}
                </ContactWrapper>
            )}
            <ContactBtn
                onClick={addContactHandler}
            >
                <Svg name={'appendItemIcon'}/>
                Добавить контакт
            </ContactBtn>
        </ContactBlock>
    )
}


export default ModalContacts;
