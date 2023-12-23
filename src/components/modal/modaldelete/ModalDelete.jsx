import { useContext } from "react"
import ModalContext from "../../../store/modal-context"
import { ModalButtonClose, ModalBtnDo, ModalBtnCancel } from "../style"
import styled from "styled-components"

const Title = styled.h2`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 11px;
    line-height: 25px;
`

const Text = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 25px;
`

const ModalDelete = ({item, handleClose}) => {
    const ctx = useContext(ModalContext)

    const removeItemHandler = () => {
        ctx.onRemoveItem(item)

        handleClose()
    }

    return (
        <>
            <Title>Удалить клиента</Title>
            <Text>Вы действительно хотите удалить данного клиента?</Text>
            <ModalBtnDo
                onClick={removeItemHandler}
            >
                Удалить
            </ModalBtnDo>
            <ModalBtnCancel
                style={{marginBottom: '0'}}
                onClick={handleClose}
            >
                Отмена
            </ModalBtnCancel>
            <ModalButtonClose
                type="button"
                onClick={handleClose}
                className='btn-close'
            />
        </>
    )
}

export default ModalDelete
