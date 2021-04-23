import React from 'react';
import Chart from '../../components/chart/Chart';
import TrainingPageStyled from './TrainingPageStyled';

const TrainingPage = () => {
  return (
    <TrainingPageStyled>
      <div className="container">
        <div className="wrapper">
          <p className="titleTodo">Моя мета прочитати</p>
        </div>
        <div className="sidebarWrap">
          <div>
            <div className="sidebarWrap__item">
              <span>0</span>
            </div>
            <p className="sidebarWrap__description">Кількість книжок</p>
          </div>
          <div>
            <div className="sidebarWrap__item">
              <span>0</span>
            </div>
            <p className="sidebarWrap__description">Кількість днів</p>
          </div>
        </div>
        <div className="">
          <p>
            Автор:
            <span>...</span>
          </p>
          <p>
            Рік:
            <span>...</span>
          </p>
          <p>
            Стор.:
            <span>...</span>
          </p>
        </div>
        <Chart />
      </div>
    </TrainingPageStyled>
  );
};

export default TrainingPage;
