import { useContext } from 'react';
import Header from '../header';
import Title from '../title/Title';
import Table from '../table';
import ButtonAppend from '../buttonAppend';
import Modal from '../modal';
import ModalContext from '../../store/modal-context';
import 'tippy.js/dist/tippy.css';
import {Section, Container, Wrapper} from './style'

const App = () => {
    const ctx = useContext(ModalContext)

    return (
        <>
            <Header />
            <Section>
                <Container>
                    <Wrapper>
                        <Title />
                        <Table />
                        <ButtonAppend />
                    </Wrapper>
                </Container>
            </Section>
            {ctx.modalState.visibile && (
                <Modal
                    item={ctx.modalState.item}
                    onClose={ctx.onModalHandler}
                    apendItem={ctx.onAppendItem}
                />
            )}
        </>
    )
}

export default App
