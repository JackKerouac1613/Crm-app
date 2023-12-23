import SearchInput from '../searchInput';
import Logo from '../../assets/img/logo.svg'
import {Container, Img, HeaderWrapper} from './style'



const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Img src={Logo} alt='Логотип'></Img>
                <SearchInput />
            </Container>
        </HeaderWrapper>
    );
}

export default Header;
