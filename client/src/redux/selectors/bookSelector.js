const getWillRead = state => state.library.willRead;
const getNowRead = state => state.library.readNow;
const getFinishRead = state => state.library.readFinish;
const getTraining = state => state.training;
const getUserTraining = state => state.auth.user.training;

export { getWillRead, getNowRead, getFinishRead, getTraining, getUserTraining };
