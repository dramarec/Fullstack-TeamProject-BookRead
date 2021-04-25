import React from 'react';
import TrainingPageStyled from './TrainingPageStyled';
import Chart from '../../components/trainingComponents/chart/Chart';
import MyTraining from '../../components/trainingComponents/myTraining/MyTraining';
import MobBookList from '../../components/trainingComponents/booksLists/mob/MobBookList';

const TrainingPage = () => {
  return (
    <TrainingPageStyled>
      <div className="container ">
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

        <MyTraining />
        <MobBookList />

        <Chart />
      </div>
    </TrainingPageStyled>
  );
};

export default TrainingPage;
