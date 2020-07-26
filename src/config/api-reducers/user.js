import constant from '../constants';

const actions = {}

actions.login_user = payload => ({
  type: constant.LOGIN,
  payload: {
    profile: payload
  }
});

actions.logout_user = () => ({
  type: constant.LOGOUT
});

actions.update_user = data => ({
  type: constant.PROFILE_UPDATE,
  payload: {
    updated_profile: data
  }
});

export default actions;