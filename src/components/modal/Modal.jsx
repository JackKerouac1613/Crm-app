import { useEffect, useState, useCallback, useRef, useContext, useReducer } from 'react';
import Portal, { createContainer } from '../portal/Portal';
import ModalContext from '../../store/modal-context';
import { AnimatePresence } from 'framer-motion';
import ModalMain from './modalmain/ModalMain';
import ModalDelete from './modaldelete/ModalDelete';
import { ModalBack, ModalWindow } from './style';


const itemReducer = (prevState, action) => {
    if(action.type === 'SURNAME') {
        return {
            surname: action.value,
            name: prevState.name,
            lastName: prevState.lastName,
            contacts: prevState.contacts,
            id: prevState.id,
            updatedAt: prevState.updatedAt,
            createdAt: prevState.createdAt
        }
    }

    if(action.type === 'NAME') {
        return {
            surname: prevState.surname,
            name: action.value,
            lastName: prevState.lastName,
            contacts: prevState.contacts,
            id: prevState.id,
            updatedAt: prevState.updatedAt,
            createdAt: prevState.createdAt
        }
    }

    if(action.type === 'LASTNAME') {
        return {
            surname: prevState.surname,
            name: prevState.name,
            lastName: action.value,
            contacts: prevState.contacts,
            id: prevState.id,
            updatedAt: prevState.updatedAt,
            createdAt: prevState.createdAt
        }
    }

    if(action.type === 'APPEND_OBJ') {
        return {
            surname: prevState.surname,
            name: prevState.name,
            lastName: prevState.lastName,
            contacts: [action.value, ...prevState.contacts],
            id: prevState.id,
            updatedAt: prevState.updatedAt,
            createdAt: prevState.createdAt
        }
    }

    if(action.type === 'REMOVE_OBJ') {
        return {
            surname: prevState.surname,
            name: prevState.name,
            lastName: prevState.lastName,
            contacts: [...prevState.contacts.filter(obj => obj.id !== action.value)],
            id: prevState.id,
            updatedAt: prevState.updatedAt,
            createdAt: prevState.createdAt
        }
    }

    if(action.type === 'CHANGE_OBJ') {
        return {
            surname: prevState.surname,
            name: prevState.name,
            lastName: prevState.lastName,
            contacts: [...prevState.contacts.map(obj => obj.id === action.value.id ? action.value : obj)],
            id: prevState.id,
            updatedAt: prevState.updatedAt,
            createdAt: prevState.createdAt
        }
    }
}

const MODAL_CONTAINER_ID = 'modal-container-id';

const Modal = ({onClose, item}) => {
    const [isMounted, setMounted] = useState(false)
    const [itemState, dispatchItemState] = useReducer(itemReducer, {...item})

    const ctx = useContext(ModalContext)

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID })
        setMounted(true)
    }, [])

    const rootRef = useRef(null)

    const handleClose =
        useCallback(() => {
            onClose?.('MODAL_VISIBILE', false)
        }, [onClose])



    const handleItemState = (type, value) => {
        dispatchItemState({type, value})
    }

    return (
        isMounted
        ? (<Portal id={MODAL_CONTAINER_ID}>
            <ModalBack>
                {ctx.modalState.viewDelete ? (
                    <AnimatePresence>
                        <ModalWindow
                            $delete={true}
                            ref={rootRef}
                            initial={{ opacity: 0.5, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <ModalDelete
                                item={itemState}
                                handleClose={handleClose}
                            />
                        </ModalWindow>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence>
                        <ModalWindow
                            ref={rootRef}
                            initial={{ opacity: 0.5, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <ModalMain
                                item={itemState}
                                itemState={itemState}
                                handleClose={handleClose}
                                handleItemState={handleItemState}
                            />
                        </ModalWindow>
                    </AnimatePresence>
                )}
            </ModalBack>
        </Portal>)
        : null
    )
}

export default Modal
