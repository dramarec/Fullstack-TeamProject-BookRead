const isAuthSelect = state => state.auth.token;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserLibrary = state => state.auth.user.books;
const getUserTraining = state => state.auth.user.training;

const authSelectors = {
  isAuthSelect,
  getUserName,
  getUserEmail,
  getUserLibrary,
  getUserTraining,
};

export default authSelectors;
