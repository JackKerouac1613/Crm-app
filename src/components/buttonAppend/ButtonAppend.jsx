import { useContext } from 'react';
import ModalContext from '../../store/modal-context';
import Svg from '../icon/Svg';
import Button from './style';

const ButtonAppend = () => {
    const ctx = useContext(ModalContext)

    const modalVisibile = () => {
        ctx.onModalHandler('MODAL_VISIBILE', true)
        ctx.onModalHandler('MODAL_CREATE')
    }

    return (
        <Button
            onClick={modalVisibile}
        >
            <Svg
                name={'appendClient'}
            />
            Добавить клиента
        </Button>
    )
}

export default ButtonAppend;
