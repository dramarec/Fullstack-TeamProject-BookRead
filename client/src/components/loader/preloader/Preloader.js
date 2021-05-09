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
    padding: 10px;
    width: 100vw;
    height: 100vh;
    background-color: white;
    pointer-events: initial;

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 670px;
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
        font-family: 'AbrilFatface-Regular';
        font-size: 60px;
        color: #ff6b08;
    }

    .bookSvg {
        display: inline-block;
        width: 70px;
        height: 70px;
        margin-right: 20px;
    }

    .textSvg {
        display: inline-block;
        width: 25px;
        height: 25px;
    }

    .team {
        min-width: 65px;
        color: #fff;
        background-color: #343a40;
        border-radius: 4px;
        text-decoration: none;
    }

    p {
        color: #343a40;
    }

    @media screen and (min-width: 768px) {
        .wrapper {
            height: 780px;
        }

        .bookSvg {
            width: 90px;
            height: 90px;
        }

        .title {
            font-size: 80px;
        }
    }

    @media screen and (min-width: 1280px) {
        .wrapper {
            height: 950px;
        }
    }

    .text-div {
        display: flex;
        width: 250px;
        margin-left: auto;
        margin: auto;
        justify-content: space-between;
        align-items: center;
    }
`;

const Pulse = styled.div`
    animation: 2s ${keyframes`${pulse}`} infinite;
`;

const Preloader = () => (
    <PreloaderStyled>
        <div className="wrapper">
            <Pulse className="firstDiv">
                <img src={book} alt="book" className="bookSvg" />
                <h1 className="title">BR</h1>
            </Pulse>

            <div className="secondDiv">
                <div className="text-div">
                    <img src={code} alt="code" className="textSvg" />
                    <span>by</span>
                    <a
                        className="team"
                        rel="noopener"
                        href="https://github.com/dramarec/Fullstack-TeamProject-BookRead"
                        target="blank"
                        aria-label="My GitHub"
                    >
                        team-1
                    </a>
                    <span>using</span>
                    <img src={react} alt="react" className="textSvg" />
                    <span>&</span>
                    <img src={node} alt="node" className="textSvg" />
                </div>
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
