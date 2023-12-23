import { useState, useEffect } from 'react';
import Input from '../UI/Input/Input';
import { Form, Label, Placeholder } from './style'

const INITIAL_VALUE = {
    surname: 'Фамилия',
    name: 'Имя',
    lastName: 'Отчество'
}

const ModalForm = ({handleItemState, itemState}) => {
    return (
        <Form>
            <ModalLabel
                str={'surname'}
                handleItemState={handleItemState}
                itemState={itemState}
            />
            <ModalLabel
                str={'name'}
                handleItemState={handleItemState}
                itemState={itemState}
            />
            <ModalLabel
                str={'lastName'}
                handleItemState={handleItemState}
                itemState={itemState}
            />
        </Form>
    )
}

const ModalLabel = ({str, handleItemState, itemState}) => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        if(itemState[str] !== '') setActive(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onInputChange = (type, value) => {
        const changeType = type.toUpperCase()
        handleItemState(changeType, value)

        if(value.length > 0) {
            if(active === true) {
                return
            } else  setActive(true)
        } else setActive(false)
    }

    return (
        <Label>
            <Input
                onChange={(event) => onInputChange(str, event.target.value)}
                value={itemState[str]}
            />
            <Placeholder
                $active={active}
            >
                {INITIAL_VALUE[str]}
            </Placeholder>
        </Label>
    )
}

export default ModalForm
