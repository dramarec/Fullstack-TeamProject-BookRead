import React from 'react'
import ReadBooks from '../../components/library/readBooks/ReadBooks'
import ReadingBooks from '../../components/library/readingBooks/ReadingBooks'
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks'
import LibraryForm from '../../components/libraryForm/LibraryForm'
import LibraryPageStyled from './LibraryPagesStyled'

const LibraryPage = () => {
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
