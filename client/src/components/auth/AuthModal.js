import React from 'react';
import Modal from '../modal/Modal';
import back from '../../assets/svg/back.svg';
import { Link } from 'react-router-dom';
import pointer from './icons/pointer.png';

const AuthModal = ({ setOpenModal }) => {
    const closeModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            <Modal className="authModal">
                <div className="signupDiv">
                    <button
                        type="button"
                        className="backBtn"
                        onClick={closeModal}
                    >
                        <Link to="/">
                            <img
                                src={back}
                                alt=""
                                width="24px"
                                height="11.62px"
                            />
                        </Link>
                    </button>
                    <h1 className="mainTitleSignUp">Books Reading</h1>
                    <h2 className="titleSignUp">Допоможе вам</h2>
                    <ul className="authFormList">
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Швидше сформулювати свою ціль і розпочати читати
                            </p>
                        </li>
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Пропорційно розподілити навантаження на кожний
                                день
                            </p>
                        </li>
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Відстежувати особистий успіх
                            </p>
                        </li>
                    </ul>
                    <h2 className="titleSignUp">Також ви зможете</h2>
                    <ul className="authFormList">
                        <li className="authFormText ">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Формувати особисту думку незалежну від інших
                            </p>
                        </li>
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Підвищити свої професійні якості опираючись на
                                нові знання
                            </p>
                        </li>
                        <li className="authFormText last">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Стати цікавим співрозмовником
                            </p>
                        </li>
                    </ul>
                    <div className="sign">
                        <button className="buttonSign up">
                            <Link to="/signup">Реєстрація</Link>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AuthModal;
