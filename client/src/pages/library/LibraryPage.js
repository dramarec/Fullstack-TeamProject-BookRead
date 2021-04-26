import React from 'react';
import { useSelector } from 'react-redux';
import ReadBooks from '../../components/library/readBooks/ReadBooks';
import ReadingBooks from '../../components/library/readingBooks/ReadingBooks';
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks';
import LibraryForm from '../../components/libraryForm/LibraryForm';
import LibraryPageStyled from './LibraryPagesStyled';
import LibraryModal from '../../components/libraryModal/LibraryModal';
import { getWillRead } from '../../redux/selectors/bookSelector';

const LibraryPage = () => {
  const booksWillRead = useSelector(getWillRead);
  //getBooksState
  /*const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => (
        <Responsive {...props} minWidth={768}  />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;*/
  return (
    <LibraryPageStyled>
      <LibraryForm />
      {booksWillRead.length > 0 ? <WillReadBooks /> : <LibraryModal />}

      {/* <ReadBooks />
      <ReadingBooks /> */}
    </LibraryPageStyled>
  );
};

export default LibraryPage;
