import constant from '../config/constants';
const initialState = {};

const merge_object = (state,payload) => {
    return Object.assign({},state,payload);
};

const registration = (state,payload) => {
    let newState = payload.address_list == null ? Object.assign({},payload,{address_list: []}) : payload;
    return newState;
};

const login = (state,payload) => {
    console.log('this is', (payload))
    return Object.assign({},payload);
};

const clear = (state) => {
    return { }
};

const user = (state = initialState, action) => {
    switch(action.type){
        case constant.LOGIN: return login(state,action.payload.profile);
        case constant.PROFILE_UPDATE: return merge_object(state,action.payload.updated_profile);
        case constant.AVATAR_UPDATE: return merge_object(state,action.payload.avatar);
        case constant.LOGOUT: return clear(state);
        default: return state;
    };
};

export default user;
