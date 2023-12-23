import { useContext, useState } from "react"
import ModalForm from '../../modalform/ModalForm';
import ModalContacts from '../../modalcontacts/ModalContacts';
import validation from '../../validation'
import ModalContext from "../../../store/modal-context";
import { ModalWrapper, ErrorWrapper, Error, ModalButtonClose, ModalBtnDo, ModalBtnCancel } from "../style";

const ModalMain = ({item, itemState, handleItemState, handleClose}) => {
    const [statusError, setStatusError] = useState(false)
    const [errorContent, setErrorContent] = useState('')

    const ctx = useContext(ModalContext)

    const actionAfter = ctx.modalState.viewChange ? ctx.onChangeItem : ctx.onAppendItem

    const handleSave = () => {
        try {
            validation(itemState)

            setStatusError(false)
            setErrorContent('')

            actionAfter(item)

            handleClose()
        } catch (error) {
            if (statusError === false) setStatusError(true)
            setErrorContent(error.message)
        }
    }


    return (
        <>
            <ModalWrapper>
                <h2>
                    {ctx.modalState.viewChange ? `Изменить данные` : 'Новый клиент'}
                </h2>
                {ctx.modalState.viewChange ? <p>ID: {item.id}</p> : null}
                <ModalForm
                    handleItemState={handleItemState}
                    itemState={itemState}
                />
            </ModalWrapper>
            <ModalContacts
                itemContacts={itemState.contacts}
                onItemHandler={handleItemState}
                statusError={statusError}
            />
            {statusError && (
                <ErrorWrapper>
                    <Error>
                        {errorContent}
                    </Error>
                </ErrorWrapper>
            )}
            <ModalButtonClose
                type="button"
                onClick={handleClose}
                className='btn-close'
            />
            <ModalBtnDo
                onClick={handleSave}
            >
                Сохранить
            </ModalBtnDo>
            <ModalBtnCancel
                onClick={handleClose}
            >
                Отмена
            </ModalBtnCancel>
        </>
    )
}

export default ModalMain
