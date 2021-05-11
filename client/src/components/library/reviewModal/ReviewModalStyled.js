import styled from 'styled-components';

const ReviewModalStyled = styled.form`
    font-family: 'Montserrat-Medium';
    background-color: white;
    width: 270px;
    height: 395px;
    padding: 17px 30px 35px 30px;
    line-height: 2;
    font-size: 16px;

    @media screen and (min-width: 768px) {
        width: 570px;
        height: 408px;
        padding: 17px 30px 48px 30px;
        line-height: 2;
    }

    .star-container svg {
        stroke: #ff6b08;
    }

    .form-control {
        margin-top: ${props => (props.isReview ? '20px' : '0px')};
        width: 210px;
        border: 1px solid gray;
        @media screen and (min-width: 768px) {
            width: 510px;
            height: 170px;
        }
    }

    .button-group {
        display: flex;
        justify-content: center;
        line-height: 2.71;
        position: absolute;
        bottom: 35px;
        @media screen and (min-width: 768px) {
            bottom: ${props => (props.isReview ? '35px' : '48px')};
            right: 150px;
        }
    }

    .button-group .secondButton {
        margin-right: 15px;

        @media screen and (min-width: 768px) {
            margin-right: 30px;
        }
    }

    .button-group button {
        width: 97px;
        @media screen and (min-width: 768px) {
            width: 130px;
        }
    }

    .current-resume {
        @media screen and (max-width: 767px) {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 12;
            -webkit-box-orient: vertical;
        }

        font-style: italic;
        font-size: 14px;
        line-height: 1.5;
        margin-top: 30px;
        @media screen and (min-width: 768px) {
            margin-top: 60px;
        }
    }
    .review-error {
        font-size: 10px;
        color: red;
        margin-top: -10px;
    }
`;

export default ReviewModalStyled;
