import React, { useContext } from 'react';
import Svg from '../icon/Svg';
import ModalContext from '../../store/modal-context';
import { CustomTippy, TippyWrap, TabledTd, ColumnId, Time, ActionBtnWrapper, ActionBtn, ContactsWrap } from './style'

const renderTime = (date) => {
    const createDate = new Date(date);
    const resultTime = new Date(createDate);

    let dd = resultTime.getDate();
        if (dd < 10) dd = '0' + dd;

    let mm = resultTime.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

    let yy = resultTime.getFullYear();
        if (yy < 10) yy = '0' + yy;

    let hh = resultTime.getHours();
        if (hh < 10) hh = '0' + hh;

    let min = resultTime.getMinutes() + 1;
        if (min < 10) min = '0' + min;

    return (
        <>
            <span>
                {dd + '.' + mm + '.' + yy + ' '}
            </span>
            <Time>
                {hh + ':' + min}
            </Time>
        </>
    );
}

const createContact = (item) => {
    const content = `${item.value}: ${item.type}`

    return (
        <CustomTippy
            key={item.id}
            content={content}>
            <TippyWrap><Svg name={item.value} /></TippyWrap>
        </CustomTippy>
    )
}

const TableItem = ({item}) => {
    const ctx = useContext(ModalContext)

    const modalChange = () => {
        ctx.onModalHandler('MODAL_CHANGE', item)
        ctx.onModalHandler('MODAL_VISIBILE', true)
    }

    const modalDelete = () => {
        ctx.onModalHandler('MODAL_DELETE', item)
        ctx.onModalHandler('MODAL_VISIBILE', true)
    }

    return (
        <>
            <ColumnId>
                {item.id}
            </ColumnId>
            <TabledTd
                style={{paddingRight: '40px'}}
            >
                {item.FIO}
            </TabledTd>
            <TabledTd
                style={{paddingRight: '60px'}}
            >
                {renderTime(item.createdAt)}
            </TabledTd>
            <TabledTd
                style={{paddingRight: '60px'}}
            >
                {renderTime(item.updatedAt)}
            </TabledTd>
            <TabledTd
                style={{paddingRight: '50px'}}
            >
                <ContactsWrap>
                    {item.contacts.map(item => createContact(item))}
                </ContactsWrap>
            </TabledTd>
            <TabledTd>
                <ActionBtnWrapper>
                    <ActionBtn
                        onClick={modalChange}
                    >
                        <Svg
                            name={'Change'}
                        />
                        Изменить
                    </ActionBtn>
                    <ActionBtn
                        $remove={true}
                        onClick={modalDelete}
                    >
                        <Svg
                            name={'Remove'}
                            $contact={false}
                        />
                        Удалить
                    </ActionBtn>
                </ActionBtnWrapper>
            </TabledTd>
        </>
    )
}

export default TableItem;
