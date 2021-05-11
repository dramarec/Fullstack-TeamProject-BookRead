import styled from 'styled-components';

const LibraryPageStyled = styled.section`
    background-color: #f6f7fb;

    @media screen and (min-width: 768px) {
        padding-bottom: 30px;
    }
    @media screen and (min-width: 1280px) {
        height: 100vh;
    }
    @media screen and (max-width: 767px) {
        padding-top: 30px;
    }
    .libraryWrap {
        height: 100vh;
    }
`;
export default LibraryPageStyled;
