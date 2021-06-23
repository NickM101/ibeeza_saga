import { put, takeLatest, all, select, call } from 'redux-saga/effects';
import { allUsers, GET_USER, CREATE_USER, DELETE_USER, UPDATE_USER } from './userReducer';

const url = 'https://crudcrud.com/api/1a54e4be18784d6eb38c09de0ab4bda7/users'

function* getUsers(){
    try {
        const response = yield fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
    
        console.log('all user', response)
        yield put(allUsers(response))
    } catch(error) {
        console.log(error)
    }
}


function* userWatcher(){
    yield takeLatest(GET_USER, getUsers)
}

function* createUser(action) {
    try {
        console.log('action.payload', action.payload.user)
        yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        }).then(res => res.body);

        yield call(getUsers)
    }catch(e) {
        console.log(e);
    }
}
function* watchCreateUser() {
    yield takeLatest(CREATE_USER, createUser);
}

function* deleteUser(action) {
    try {
        yield fetch(url + '/' + action.payload, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.body);

        yield call(getUsers)
    }catch(e) {
        console.log(e);
    }
}
function* watchDeleteUser() {
    yield takeLatest(DELETE_USER, deleteUser);
}

function* updateUser(action) {
    console.log('action update', action.payload.id)
    try {
        yield fetch(url + '/' + action.payload.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        }).then(res => res.body);

        yield call(getUsers)
    }catch(e) {
        console.log(e);
    }
}
function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER, updateUser);
}

export default function* rootSaga(){
    yield all([
        userWatcher(),
        watchCreateUser(),
        watchDeleteUser(),
        watchUpdateUser()
    ])
}