const isAuth = state => state.auth.token;
const getId = state => state.auth.user.id;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserLibrary = state => state.auth.user.books;
const getUserTraining = state => state.auth.user.training;

const authSelectors = {
  isAuth,
  getId,
  getUserName,
  getUserEmail,
  getUserLibrary,
  getUserTraining,
};

export default authSelectors;
