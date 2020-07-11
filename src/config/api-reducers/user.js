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

actions.register_user = data => ({
  type: constant.REGISTRATION,
  payload: {
    profile: data
  }
});

actions.register_socmed = data => ({
  type: constant.REGISTER_SOCMED,
  payload: data
})

actions.register_phone = data => ({
  type: constant.REGISTER_PHONE,
  payload: data
});

actions.register_token = data => ({
  type: constant.REGISTER_TOKEN,
  payload: {
    token: data,
  }
});

actions.register_name = data => ({
  type: constant.REGISTER_NAME,
  payload: data
});

actions.register_username = data => ({
  type: constant.REGISTER_USERNAME,
  payload: data
});

actions.clean_registration = () => ({
  type: constant.CLEAN_REGISTRATION,
});

export default actions;