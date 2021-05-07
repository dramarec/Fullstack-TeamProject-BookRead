import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import book from '../../../assets/svg/book.svg';
import react from '../../../assets/svg/react.svg';
import node from '../../../assets/svg/node.svg';
import code from '../../../assets/svg/code.svg';

const PreloaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: white;
    pointer-events: initial;

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 900px;
    }

    .firstDiv {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .secondDiv {
        display: inline-block;
        vertical-align: bottom;
        text-align: center;
    }

    .title {
        font-size: 60px;
        color: #ff6b08;
    }

    .bookSvg {
        width: 50px;
        height: 50px;
        margin-right: 30px;
    }

    .textSvg {
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .team {
        color: #fff;
        background-color: #343a40;
        border-radius: 0.25rem;
        text-decoration: none;
    }

    p {
        color: #343a40;
    }

    @media (min-width: 768px) {
        .bookSvg {
            width: 70px;
            height: 70px;
        }

        .title {
            font-size: 80px;
        }
    }
`;

const Pulse = styled.h1`
    animation: 2s ${keyframes`${pulse}`} infinite;
`;

const Preloader = () => (
    <PreloaderStyled>
        <div className="wrapper">
            <div className="firstDiv">
                <img src={book} alt="book" className="bookSvg" />
                <Pulse className="title">BR</Pulse>
            </div>

            <div className="secondDiv">
                <p>
                    <img src={code} alt="book" className="textSvg" /> by{' '}
                    <a
                        className="team"
                        rel="noopener"
                        href="https://github.com/dramarec/Fullstack-TeamProject-BookRead"
                        aria-label="My GitHub"
                    >
                        team-1
                    </a>{' '}
                    using <img src={react} alt="book" className="textSvg" /> &{' '}
                    <img src={node} alt="book" className="textSvg" />
                </p>
                <p>
                    <small className="text-muted">
                        Project code is open source. Feel free to fork and make
                        your own version.
                    </small>
                </p>
            </div>
        </div>
    </PreloaderStyled>
);

export default Preloader;
