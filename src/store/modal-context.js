import React, { useState, useReducer } from "react"

const INITIAL_ITEM = [
    {
        "name":"Роман",
        "surname":"Петров",
        "lastName":"Геннадьевич",
        "contacts":[
            {"type":"gena_krokodil@rambler.com","value":"Email"}
        ],
        "id":"1683830223817",
        "updatedAt":"2023-05-22T16:16:08.616Z",
        "createdAt":"2023-05-11T18:37:03.817Z"
    },
    {
        "name":"Сергей",
        "surname":"Филипов",
        "lastName":"Федерович",
        "contacts":[],
        "id":"1684518852937",
        "updatedAt":"2023-05-19T17:54:12.937Z",
        "createdAt":"2023-05-19T17:54:12.937Z"},
    {
        "name":"Семен",
        "surname":"Тюрин",
        "lastName":"Витальевич",
        "contacts":[
            {"type":"+7(912)880-27-51","value":"Телефон"}
        ],
        "id":"1684772207171",
        "updatedAt":"2023-05-22T16:16:47.171Z",
        "createdAt":"2023-05-22T16:16:47.171Z"
    },
        {
            "name":"Валентин",
        "surname":"Свекольников",
        "lastName":"Петрович",
        "contacts":[
            {"type":"@loongss","value":"Facebook"}
        ],
        "id":"1703252970234",
        "updatedAt":"2023-12-23T12:17:30.148Z",
        "createdAt":"2023-12-22T13:49:30.234Z"
    }
]

const ModalContext = React.createContext({
    initialListItem : [],
    listItem: [],
    modalState: null,
    onModalHandler: () => {},
    onAppendItem: () => {},
    onRemoveItem: () => {},
    onChangeItem: () => {},
    onListItemHandler: () => {}
})

const modalReducer = (prevState, action) => {
    if(action.type === 'MODAL_VISIBILE') {
        return {
            viewChange: prevState.viewChange,
            viewDelete: prevState.viewDelete,
            visibile: action.value,
            item: prevState.item
        }
    }

    if(action.type === 'MODAL_CREATE') {
        return {
            viewChange: false,
            viewDelete: false,
            visibile: prevState.visibile,
            item: {
                id: Math.round(Math.random() * 2000000000000),
                surname: '',
                name: '',
                lastName: '',
                contacts: [],
                updatedAt: Date.now(),
                createdAt: Date.now()
            }
        }
    }

    if(action.type === 'MODAL_CHANGE') {
        return {
            viewChange: true,
            viewDelete: false,
            visibile: prevState.visibile,
            item: action.value
        }
    }

    if(action.type === 'MODAL_DELETE') {
        return {
            viewChange: false,
            viewDelete: true,
            visibile: prevState.visibile,
            item: action.value
        }
    }
}

const correctedItem = (item) => {
    item.FIO = `${item.surname} ${item.name} ${item.lastName}`
    item.contacts = item.contacts.map(item => {
        item.id = Math.round(Math.random() * 1000000)

        return item
    })

    return item
}

export const ModalContextProvider = (props) => {
    const correctedListItem = INITIAL_ITEM.map(item => correctedItem(item))

    const [listItem, setListItem] = useState(correctedListItem)

    const [modalState, dispatchModalState] = useReducer(modalReducer, {visibile: false, item: {surname: '', name: '', lastName: '', contacts: []}})

    const handleModalState = (type, value) => {
        dispatchModalState({type, value})
    }

    const addNewItemHandler = (newItem) => {
        setListItem((prevListitem) => {
            return[correctedItem(newItem), ...prevListitem]
        })
    }

    const removeItemHandler = (item) => {
        setListItem((prevListitem) => {
            return[...prevListitem.filter(el => el.id !== item.id)]
        })
    }

    const changeItemHandler = (item) => {
        setListItem((prevListitem) => {
            return[...prevListitem.map(el => el.id === item.id ? correctedItem(item) : el)]
        })
    }

    return <ModalContext.Provider
        value={{
            initialListItem: correctedListItem,
            listItem: listItem,
            modalState: modalState,
            onModalHandler: handleModalState,
            onAppendItem: addNewItemHandler,
            onRemoveItem: removeItemHandler,
            onChangeItem: changeItemHandler,
            onListItemHandler: setListItem
        }}
    >
        {props.children}
    </ModalContext.Provider>
}

export default ModalContext
