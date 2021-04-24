import React from 'react';
import Chart from '../../components/chart/Chart';
import TrainingPageStyled from './TrainingPageStyled';
// import book from '../../assets/svg/book3.svg';
import BooksList from '../../components/trainingComponents/BooksList';
const TrainingPage = () => {
  return (
    <TrainingPageStyled>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-descr">
            <p className="sidebar-descr__item">Моя мета прочитати</p>
          </div>

          <ul className="sidebar-wrap">
            <li className="sidebar-wrap__list">
              <div className="sidebar-wrap__item">
                <span>0</span>
              </div>
              <p className="sidebar-wrap__description">Кількість книжок</p>
            </li>
            <li className="sidebar-wrap__list">
              <div className="sidebar-wrap__item">
                <span>0</span>
              </div>
              <p className="sidebar-wrap__description">Кількість днів</p>
            </li>
          </ul>
        </div>

        <div className="baner">
          <p className="baner__title">Моє тренування</p>
        </div>
        <BooksList />
        <Chart />
      </div>
    </TrainingPageStyled>
  );
};

export default TrainingPage;
