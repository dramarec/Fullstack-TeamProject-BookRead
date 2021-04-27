import React, { useEffect } from 'react';
import ReadBooks from '../../components/library/readBooks/ReadBooks';
import ReadingBooks from '../../components/library/readingBooks/ReadingBooks';
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks';
import LibraryForm from '../../components/libraryForm/LibraryForm';
import LibraryPageStyled from './LibraryPagesStyled';
import LibraryModal from '../../components/libraryModal/LibraryModal';
import librarySelector from '../../redux/selectors/userLibrarySelector'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersBooksOperetion } from '../../redux/operations/userLibraryOperation';

const LibraryPage = () => {
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getUsersBooksOperetion())
   }, []);

  const  plan = useSelector(librarySelector.getUsersplaneToRead);
  const  now = useSelector(librarySelector.getUsersreadNow);
  const  finish = useSelector(librarySelector.getUsersreadFinish);
  console.log('userBooks', plan, now, finish);
  return (
    <LibraryPageStyled>
      <LibraryForm />
      <LibraryModal />
      {finish.length > 0 &&  <ReadBooks finish={finish} />}
      {now.length > 0 && <ReadingBooks now={now}   />}
     {plan.length > 0 && <WillReadBooks plan={plan} /> }
    </LibraryPageStyled>
  );
};

export default LibraryPage;
