import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from 'react-responsive';
//import ReadBooks from '../../components/library/readBooks/ReadBooks';
//import ReadingBooks from '../../components/library/readingBooks/ReadingBooks';
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks';
import LibraryForm from '../../components/libraryForm/LibraryForm';
import LibraryPageStyled from './LibraryPagesStyled';
import LibraryModal from '../../components/libraryModal/LibraryModal';
import { getWillRead } from '../../redux/selectors/bookSelector';
import Modal from '../../components/modal/Modal';
import modalActions from '../../redux/actions/modalAction';
import ButtonAdd from '../../components/buttonAdd/ButtonAdd';

const LibraryPage = () => {
  const dispatch = useDispatch();
  const booksWillRead = useSelector(getWillRead);
  //const modalActive = useSelector(getModalState);

  const Tablet = props => <Responsive {...props} minWidth={768} />;

  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  // useEffect(() => {
  //   dispatch(modalActions.toggleModal());
  // }, []);

  const openModal = () => {
    dispatch(modalActions.toggleModal());
  };
  return (
    <LibraryPageStyled>
      <Mobile>
        {booksWillRead.length > 0 ? (
          <WillReadBooks />
        ) : (
          <Modal children={<LibraryModal />} />
        )}
        {booksWillRead.length > 0 && <ButtonAdd onHandleClick={openModal} />}
        <Modal children={<LibraryForm />} />
      </Mobile>

      <Tablet>
        <LibraryForm />
        {booksWillRead.length > 0 ? <WillReadBooks /> : <LibraryModal />}
      </Tablet>

      {/* <ReadBooks />
      <ReadingBooks /> */}
    </LibraryPageStyled>
  );
};

export default LibraryPage;
