import book from '../../../assets/svg/book.svg';
import ReadBookItemMobileStyled from './ReadBookItemMobileStyled';
import { /*useDispatch,*/ useSelector } from 'react-redux';
import Modal from '../../modal/Modal';
import ReviewModal from '../reviewModal/ReviewModal';
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { getFinishRead } from '../../../redux/selectors/bookSelector';

const ReadingBookItemMobile = ({ item }) => {
  //const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [isOpen, setisOpen] = useState(false);
  const finishBooks = useSelector(getFinishRead);

  const handleClick = e => {
    const id = e.target.id;
    console.log(id);
    setData(finishBooks.find(book => book._id === id));
    setisOpen(true);
    /*dispatch(modalActions.toggleModal());
        document.body.style.overflow = 'visible';*/
  };
  const closeModal = () => {
    setisOpen(false);
  };
  return (
    <>
      <ReadBookItemMobileStyled>
        <div className="bookName flex">
          <img src={book} alt="" />
          <p>{item.title}</p>
        </div>
        <div className="author flex">
          <p className="title">Автор:</p>
          <p className="text">{item.author}</p>
        </div>
        <div className="publishYear flex">
          <p className="title">Рік:</p>
          <p className="text">{item.year}</p>
        </div>
        <div className="pages flex">
          <p className="title">Стор.:</p>
          <p className="text">{item.numberOfPages}</p>
        </div>
        <div className="review flex">
          <p className="title">Рейтинг:</p>
          <StarRatings
            rating={item.rating}
            starRatedColor="#FF6B08"
            starEmptyColor="white"
            starSpacing="1px"
            starDimension="17px"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <button
          type="button"
          className="review-button"
          id={item._id}
          onClick={handleClick}
        >
           {!item.review ? 'Резюме' : 'Читать' }
        </button>
      </ReadBookItemMobileStyled>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <ReviewModal closeModal={closeModal} data={data} />
        </Modal>
      )}
    </>
  );
};

export default ReadingBookItemMobile;
