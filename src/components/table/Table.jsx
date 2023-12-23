import React, { useContext } from 'react';
import Svg from '../icon/Svg';
import ModalContext from '../../store/modal-context';
import TableItem from '../tableItems';
import { Reorder } from 'framer-motion';
import {TabledWrapper, Tabled, TabledTh} from './style'

const INITIAL_TITLE_ARRAY =  [
    {
        id: 1,
        valueSort: true,
        field: 'id',
        content: 'ID',
        style: {paddingLeft: '20px'}
    },
    {
        id: 2,
        valueSort: false,
        field: 'FIO',
        content: 'Фамилия Имя Отчество'
    },
    {
        id: 3,
        valueSort: false,
        field: 'createdAt',
        content: 'Дата и время создания'
    },
    {
        id: 4,
        valueSort: false,
        field: 'updatedAt',
        content: 'Последние изменения'
    },
    {
        id: 5,
        content: 'Контакты'
    },
    {
        id: 6,
        content: 'Действия'
    }
]

const TableTitle = ({id, field, valueSort = null, content, style = null, sortItem, children = null}) => {
    return (
        <TabledTh
            onClick={() => sortItem(id, valueSort, field)}
            $active={valueSort}
            style={style}
        >
            {content}
            {valueSort !== null && (
                <Svg name={'arrowSort'} />
            )}
            {children}
        </TabledTh>
    )
}


const Table = () => {
    const ctx = useContext(ModalContext)

    const sortItem = (id, valueSort, field) => {
        const copyItems = [...ctx.listItem]

        const sortItems = copyItems.sort(( a, b ) => {
            if (a[field] > b[field]) {
                if(valueSort) return -1
                else return 1
            }

            if (a[field] < b[field]) {
                if(valueSort) return 1
                else return -1
            }

            return 0
        })

        ctx.onListItemHandler(sortItems)

        INITIAL_TITLE_ARRAY.map((item) => {
            if(item.valueSort === undefined) return item

            if(item.id === id) {
                item.valueSort = !item.valueSort
                return item
            }

            item.valueSort = false

            return item
        })

    }

    return (
        <TabledWrapper>
            <Tabled>
                <thead>
                    <tr>
                        {INITIAL_TITLE_ARRAY.map((item) => {
                            return (
                                <TableTitle
                                    key={item.id}
                                    id={item.id}
                                    field={item.field}
                                    valueSort={item.valueSort}
                                    content={item.content}
                                    style={item.style}
                                    sortItem={sortItem}
                                >
                                    {item.field === 'FIO' && <span style={{
                                        color: '#9873FF',
                                        fontWeight: '600',
                                        fontSize: '10px',
                                        lineHeight: '14px',
                                    }}>А-Я</span>}
                                </TableTitle>
                            )
                        })}
                    </tr>
                </thead>
                <Reorder.Group as='tbody' values={ctx.listItem}>
                    {ctx.listItem.map((item) => {
                        return (
                            <Reorder.Item
                                key={item.id}
                                value={item}
                                as='tr'
                                style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid rgba(200, 197, 209, 0.5)',
                                    height: '60px',
                                }}
                                dragListener={false}
                            >
                                <TableItem
                                    key={item.id}
                                    item={item}
                                />
                            </Reorder.Item>
                        )})
                    }
                </Reorder.Group>
            </Tabled>
        </TabledWrapper>
    )
}

export default Table;
