const getUsersplaneToRead = state => state.library.planeToRead
const getUsersreadNow = state => state.library.readNow
const getUsersreadFinish = state => state.library.readFinish



const librarySelector = {
    getUsersplaneToRead,
    getUsersreadNow,
    getUsersreadFinish
 };
 export default librarySelector