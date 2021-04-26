import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  .data-picker {
    padding: 5px 47px;
    border: 1px solid #a6abb9;
    background: transparent;
    outline: none;
    height: 42px;
    width: 250px;

    /* @media (min-width: 768px) {
    } */
  }
`;

export default Wrapper;
