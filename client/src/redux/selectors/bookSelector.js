const getWillRead = state => state.library.willRead;
const getNowRead = state => state.library.readNow
const getFinishRead = state => state.library.readFinish

//const getWillReadLength = state => state.library.willRead.length;
//const getNowReadLength = state => state.library.readNow.length
//const getFinishReadLength = state => state.library.readFinish.length

const getTraining = state => state.training
const getUserTraining = state => state.auth.user.training
export { 
    getWillRead,
    getNowRead,
    getFinishRead,
    getTraining,
    getUserTraining,
    //getWillReadLength,
    //getNowReadLength,
    //getFinishReadLength


};
