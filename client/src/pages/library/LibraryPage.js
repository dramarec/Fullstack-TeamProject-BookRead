import React from 'react'
import ReadBooks from '../../components/library/readBooks/ReadBooks'
import ReadingBooks from '../../components/library/readingBooks/ReadingBooks'
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks'
import LibraryForm from '../../components/libraryForm/LibraryForm'
import LibraryPageStyled from './LibraryPagesStyled'


const LibraryPage = () => {
    /*const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => (
        <Responsive {...props} minWidth={768}  />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;*/
    return (
        <LibraryPageStyled>
        
            <LibraryForm/>
            <ReadBooks/>
            <ReadingBooks/>
            <WillReadBooks/>
        
        </LibraryPageStyled>

    )
}

export default LibraryPage