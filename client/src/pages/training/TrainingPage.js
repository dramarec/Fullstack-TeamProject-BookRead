import React, { /*useEffect,*/ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Responsive from 'react-responsive';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import TimersSet from '../../components/timer/TimersSet';
import MyGoal from '../../components/myGoal/MyGoal';
import DescBookList from '../../components/trainingComponents/booksLists/desc/DescBookList';
import trainingSelector from '../../redux/selectors/trainingSelector';
import Result from '../../components/result/Result';
//import trainingOperation from '../../redux/operations/trainingOperation';
import { getTraining } from '../../redux/selectors/bookSelector';
//import book from '../../assets/svg/book3.svg';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';
import ButtonAdd from '../../components/buttonAdd/ButtonAdd';
import Modal from '../../components/modal/Modal';
import back from '../../assets/svg/back.svg';

const TrainingPage = () => {
    // const training = useSelector(trainingSelector.getTraining);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const trainingBooksList = useSelector(trainingSelector.trainingBooksList);
    //const dispatch = useDispatch();
    /*useEffect(() => {
        dispatch(trainingOperation.getTrainingOperation());
    }, []);*/
    const isTraining = useSelector(getTraining);
    //const isUserTraining = useSelector(getUserTraining)
    // console.log('isTraining',isTraining);
     console.log('TrainingPage');

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => (
        <Responsive {...props} minWidth={768} maxWidth={1279} />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <TrainingPageStyled className="container">
            <Desktop>
                {isTraining.duration !== 0 ? (
                    <>
                        <div className="leftSide">
                            <TimersSet />
                            <DescBookList books={trainingBooksList} />
                            <Chart />
                        </div>

                        <div className="rigthSide">
                            <MyGoal
                                startTraining={isTraining.duration !== 0}
                                training={isTraining}
                            />
                            <Result />
                        </div>
                    </>
                ) : (
                    <>
                        <MyTraining />
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            training={isTraining}
                        />
                        <Chart />
                    </>
                )}
            </Desktop>
            <Tablet>
                {isTraining.duration !== 0 ? (
                    <>
                        <TimersSet />
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            
                        />
                        <DescBookList books={trainingBooksList} />
                        <Chart />
                        <Result />
                    </>
                ) : (
                    <>
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            
                        />
                        <MyTraining />
                        <Chart />
                    </>
                )}
            </Tablet>
            <Mobile>
                {isTraining.duration !== 0 ? (
                    <>
                        <TimersSet />
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            training={isTraining}
                        />
                        <MobBookList books={trainingBooksList} />
                        <Chart />
                        <Result />
                    </>
                ) : (
                    <>
                        <MyGoal
                            startTraining={isTraining.duration !== 0}
                            training={isTraining}
                        />
                        <MobBookList />
                        <Chart />
                        <ButtonAdd onHandleClick={openModal} />
                        {isOpenModal && (
                            <Modal closeModal={closeModal}>
                                <div className="trainingModal">
                                    <button
                                        className="bookFormBtnBack"
                                        onClick={closeModal}
                                    >
                                        <img
                                            src={back}
                                            alt=""
                                            width="24px"
                                            height="11.62px"
                                        />
                                    </button>
                                    <MyTraining />
                                </div>
                            </Modal>
                        )}
                    </>
                )}
            </Mobile>
        </TrainingPageStyled>
    );
};
export default TrainingPage;
