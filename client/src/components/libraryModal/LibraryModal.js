import React, { useState } from 'react';
import Responsive from 'react-responsive';
import Modal from '../modal/Modal';
import book from '../../assets/svg/book3.svg';
import vector from '../../assets/svg/vector.svg';
import flag from '../../assets/svg/flag.svg';
import LibraryModalStyled from './LibraryModalStyled';

const LibraryModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(true);

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Tablet = props => <Responsive {...props} minWidth={768} />;

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <LibraryModalStyled>
            <Mobile>
                {isOpenModal && (
                    <Modal closeModal={closeModal}>
                        <div className="libraryModal">
                            <ul className="list">
                                <li className="listItem">
                                    Крок 1.
                                    <div className="listItemPart1">
                                        <img
                                            src={book}
                                            alt=""
                                            className="listItemImgPart1"
                                        />
                                        <p className="listItemTitlePart1">
                                            Створіть особисту бібліотеку
                                        </p>
                                    </div>
                                    <div className="listItemPart2">
                                        <img
                                            src={vector}
                                            alt=""
                                            className="listItemImgPart2"
                                        />
                                        <p className="listItemTitlePart2">
                                            Додайте до неї книжки, які маєте
                                            намір прочитати.
                                        </p>
                                    </div>
                                </li>
                                <li className="listItem">
                                    Крок 2.
                                    <div className="listItemPart1">
                                        <img
                                            src={flag}
                                            alt=""
                                            className="listItemImgPart1"
                                        />
                                        <p className="listItemTitlePart1">
                                            Сформуйте своє перше тренування
                                        </p>
                                    </div>
                                    <div className="listItemPart2">
                                        <img
                                            src={vector}
                                            alt=""
                                            className="listItemImgPart2"
                                        />
                                        <p className="listItemTitlePart2">
                                            Визначте ціль, оберіть період,
                                            розпочинайте тренування.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <button
                                className="listBtn"
                                type="button"
                                onClick={closeModal}
                            >
                                Ok
                            </button>
                        </div>
                    </Modal>
                )}
            </Mobile>
            <Tablet>
                <ul className="list">
                    <li className="listItem">
                        Крок 1.
                        <div className="listItemPart1">
                            <img
                                src={book}
                                alt=""
                                className="listItemImgPart1"
                            />
                            <p className="listItemTitlePart1">
                                Створіть особисту бібліотеку
                            </p>
                        </div>
                        <div className="listItemPart2">
                            <img
                                src={vector}
                                alt=""
                                className="listItemImgPart2"
                            />
                            <p className="listItemTitlePart2">
                                Додайте до неї книжки, які маєте намір
                                прочитати.
                            </p>
                        </div>
                    </li>
                    <li className="listItem">
                        Крок 2.
                        <div className="listItemPart1">
                            <img
                                src={flag}
                                alt=""
                                className="listItemImgPart1"
                            />
                            <p className="listItemTitlePart1">
                                Сформуйте своє перше тренування
                            </p>
                        </div>
                        <div className="listItemPart2">
                            <img
                                src={vector}
                                alt=""
                                className="listItemImgPart2"
                            />
                            <p className="listItemTitlePart2">
                                Визначте ціль, оберіть період, розпочинайте
                                тренування.
                            </p>
                        </div>
                    </li>
                </ul>
            </Tablet>
        </LibraryModalStyled>
    );
};

export default LibraryModal;
