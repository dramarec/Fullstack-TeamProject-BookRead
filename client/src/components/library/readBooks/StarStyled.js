import styled from 'styled-components';

const StarStyled = styled.section`
display: flex;
align-items: center;
@media screen and (max-width: 767px) {
    flex: 2 1 0%;
}
@media screen and (min-width: 768px) {
    margin-right: 18px; 
    }
@media screen and (min-width: 1280px) {
    margin-right: 50px; 
}
}
input[type='radio'] {
    display: none;
}
`

export default StarStyled