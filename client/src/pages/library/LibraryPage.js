import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import ReadBooks from '../../components/library/readBooks/ReadBooks';
import ReadingBooks from '../../components/library/readingBooks/ReadingBooks';
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks';
import LibraryForm from '../../components/libraryForm/LibraryForm';
import LibraryPageStyled from './LibraryPagesStyled';
import LibraryModal from '../../components/libraryModal/LibraryModal';
import { getUsersBooksOperetion } from '../../redux/operations/userLibraryOperation';
import { 
  getWillRead, 
  getUsersreadNow,
  getUsersreadFinish 
} from '../../redux/selectors/bookSelector';
import Modal from '../../components/modal/Modal';
import modalActions from '../../redux/actions/modalAction';

const LibraryPage = () => {
  const dispatch = useDispatch();
  const booksWillRead = useSelector(getWillRead);
  //const modalActive = useSelector(getModalState);
  const  bookNowRead = useSelector(getUsersreadNow);
  const  bookFinished = useSelector(getUsersreadFinish);
  useEffect(() => {
    dispatch(getUsersBooksOperetion())
  }, []);
  const Tablet = props => <Responsive {...props} minWidth={768} />;

  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  /*useEffect(() => {
    dispatch(modalActions.toggleModal());
  }, []);*/

  return (
    <LibraryPageStyled>
      <Mobile>
        <LibraryForm />
       {bookFinished.length > 0 &&  <ReadBooks bookFinished={bookFinished} />}
       {bookNowRead.length > 0 && <ReadingBooks bookNowRead={bookNowRead}   />}
        {booksWillRead.length > 0 ? (
          <WillReadBooks />
        ) : (
          <Modal children={<LibraryModal />} />
        )}
      </Mobile>

      <Tablet>
        <LibraryForm />
        {bookFinished.length > 0 &&  <ReadBooks bookFinished={bookFinished} />}
        {bookNowRead.length > 0 && <ReadingBooks bookNowRead={bookNowRead}   />}
        {booksWillRead.length > 0 ? <WillReadBooks /> : <LibraryModal />}
      </Tablet>
    </LibraryPageStyled>
  );
};

export default LibraryPage;
