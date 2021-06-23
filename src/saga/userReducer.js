export const GET_USER = 'GET_USER';

export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const ALL_USERS = 'ALL_USERS';


export const getUser = () => ({
    type: GET_USER
})

export const allUsers = (users) => ({
    type: ALL_USERS,
    users
})

export const createUser = (user) => {
    return {
        type: CREATE_USER,
        payload:　user
    }
}

export const deleteUser = (userID) => {
    return {
        type: DELETE_USER,
        payload: userID
    }
}

export const updateUser = (userUpdate) => {
    return {
        type: UPDATE_USER,
        payload: userUpdate
    }
}


const initialState = {
    users: undefined
}

export default (state = initialState, action) => {
    switch(action.type){
        case ALL_USERS:
            const { users } = action;
            return {
                ...state,
                users
            }
            default: return state
    }
}









