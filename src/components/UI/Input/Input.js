import styled from "styled-components"


const ModalInput = styled.input`
    width: 100%;
    padding-bottom: 4px;
    border: none;
    border-bottom: 1px solid rgba(200, 197, 209, 1);
    font-size: 14px;
    line-height: 19px;

    &:focus-visible {
        outline: none;
    }
`

const Input = ({onChange, placeholder, value}) => {
    return (
        <>
            <ModalInput
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export default Input
