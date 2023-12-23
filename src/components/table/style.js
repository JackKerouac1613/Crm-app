import styled from "styled-components";

const TabledWrapper = styled.div`
    width: 100%;
`

const Tabled = styled.table`
    width: 100%;
    margin-bottom: 40px;
    caption-side: bottom;
    border-collapse: collapse;
`

const TabledTh = styled.th`
    padding-bottom: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.$active ? '#9873FF' : '#B0B0B0;'};
    cursor: pointer;
    transition: color .2s ease-in-out;
    vertical-align: bottom;

    & svg {
        transition: transform .2s ease-in-out;
        transform: ${(props) => props.$active ? 'rotate(180deg);' : 'rotate(0deg);'};
    }
`

export {TabledWrapper, Tabled, TabledTh}
