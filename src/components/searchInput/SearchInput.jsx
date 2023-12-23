import { useContext } from 'react';
import ModalContext from '../../store/modal-context';
import Input from './style';


const SearchInput = () => {
    const ctx = useContext(ModalContext)

    const filterHandler = (value) => {
        const copyList = ctx.initialListItem

        const listFilter = copyList.filter(item => {
            if (item.FIO.toLowerCase().includes(value.toLowerCase())) return true
            if (item.id.toLowerCase().includes(value.toLowerCase())) return true
            if (item.createdAt.toLowerCase().includes(value.toLowerCase())) return true
            if (item.updatedAt.toLowerCase().includes(value.toLowerCase())) return true

            return false
        })

        ctx.onListItemHandler(listFilter)
    }

    return (
        <Input placeholder='Введите запрос' onChange={(e) => filterHandler(e.target.value)}/>
    )
}

export default SearchInput;
