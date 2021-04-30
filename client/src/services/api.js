import axios from 'axios';

class bookReadApi {
    constructor() {
        axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    }

    // auth end-points
    reg(newUser) {
        return axios
            .post('/users/auth/register', newUser)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err);
            });
    }

    logIn(userCredentials) {
        return axios
            .post('/users/auth/login', userCredentials)
            .then(res => res.data.data)
            .catch(error => {
                throw new Error(error);
            });
    }

    logInWithGoogle() {
        return axios
            .post('/users/auth/google-login')
            .then(res => res.data.data)
            .catch(error => {
                throw new Error(error);
            });
    }

    logOut() {
        return axios.post('/users/auth/logout');
    }

    setToken(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    unsetToken() {
        axios.defaults.headers.common.Authorization = '';
    }

    // library end-points
    addBook(book) {
        return axios
            .post('/books', book)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err);
            });
    }

    addReviewToBook(id, review) {
        return axios
            .patch(`/books/${id}`, review)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err);
            });
    }

    // training end-points
    addTraining(training) {
        return axios
            .post('/training', training)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err);
            });
    }

    addReadPages(pages) {
        return axios
            .patch('/training', pages)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err);
            });
    }

    getTraining() {
        return axios
            .get('/training')
            .then(res => res.data.training)
            .catch(err => {
                throw new Error(err);
            });
    }

    // user end-point
    getLibraryInfo() {
        return axios
            .get('/users/user')
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err);
            });
    }
}

export default new bookReadApi();
