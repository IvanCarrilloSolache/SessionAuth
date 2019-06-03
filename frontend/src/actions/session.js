import * as apiUtil from '..util/session';
// action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// actions
const receiveCurrentUser = user => ({
    type:RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type:LOGOUT_CURRENT_USER
});
// action creators
export const login = user => async dispatch => {
    const response = await apiUtil.login(user);
    const data = await response.json();
    
    if (response.ok) {
        return dispatch(receiveCurrentUser(data));
    }
    // todo: handle errors
};

export const signup = user => async dispatch => {
    const response = await apiUtil.signup(user);
    const data = await response.json();

    if (response.ok) {
        return dispatch(receiveCurrentUser(data));
    }
    // todo: handle errors
};

export const logout = () => async dispatch => {
    const response = await apiUtil.logout();
    const data = await response.json();

    if (response.ok) {
        return dispatch(logoutCurrentUser());
    }
    // todo:handle errors
};