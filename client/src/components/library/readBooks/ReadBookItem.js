import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import book from '../../../assets/svg/book.svg';
import modalActions from '../../../redux/actions/modalAction';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';
import ReadBookItemStyled from './ReadBookItemStyled';
import Star from './Star';
import { getFinishRead } from '../../../redux/selectors/bookSelector';

const ReadBookItem = ({ item }) => {
  // console.log('readbook', item);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const finishBooks = useSelector(getFinishRead);

  const handleClick = e => {
    const id = e.target.id;
    console.log(id);
    setData(finishBooks.find(book => book._id === id));
    dispatch(modalActions.toggleModal());
    document.body.style.overflow = 'visible';
  };
  return (
    <>
      <ReadBookItemStyled>
        <div className="bookName">
          <img src={book} alt="" />
          <p>{item.title}</p>
        </div>
        <p className="author">{item.author}</p>
        <p className="publishYear">{item.year}</p>
        <p className="pages">{item.numberOfPages}</p>
        <div className="review">
          <Star />
          <button
            type="button"
            className="review-button"
            id={item._id}
            onClick={handleClick}
          >
            Резюме
          </button>
        </div>
      </ReadBookItemStyled>
      {/* <Modal><ReviewModal data={data}  handleClick={handleClick}/></Modal> */}
    </>
  );
};

export default ReadBookItem;

//<Modal openModal={openModal}/>
