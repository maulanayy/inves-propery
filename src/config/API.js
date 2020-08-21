import { request } from "../utils/";

const ROOT_URL = 'http://core.invesproperti.id/api/v1'
// const useAuth = true;

const home = {
  statistic: (cancelToken) =>
    request({
      url: `${ROOT_URL}/home/statistic`,
      method: "GET",
      cancelToken,
    }),
  testimonial: (cancelToken) =>
    request({
      url: `${ROOT_URL}/feature/testimonial`,
      method: "GET",
      cancelToken,
    }),
  opinion: (cancelToken) =>
    request({
      url: `${ROOT_URL}/feature/opinion`,
      method: "GET",
      cancelToken,
    }),
  support: (cancelToken) =>
    request({
      url: `${ROOT_URL}/feature/support`,
      method: "GET",
      cancelToken,
    }),
  featured: (cancelToken) =>
    request({
      url: `${ROOT_URL}/feature/featured`,
      method: "GET",
      cancelToken,
    }),
};

const project = {

  get: (cancelToken, params) =>
    request({
      url: `${ROOT_URL}/project`,
      method: "GET",
      cancelToken,
      params: params
    }),

  getbyID: (cancelToken, slug) =>
    request({
      url: `${ROOT_URL}/project/${slug}`,
      method: "GET",
      cancelToken,
    }),
};

const faqs = {
  get: (cancelToken) =>
    request({
      url: `${ROOT_URL}/faq`,
      method: "GET",
      cancelToken,
    }),
};

const account = {
  get : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/profile`,
      method: "GET",
      params: params,
      cancelToken,      
    }),
  update : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/profile`,
      method: "POST",
      params: params,
      cancelToken,      
    }),
  forgot : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/forgot-password`,
      method: "POST",
      params: params,
      cancelToken,      
    }),  
  login : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/login`,
      method: "POST",
      params: params,
      cancelToken,      
    }),
  register : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/register`,
      method: "POST",
      params: params,
      cancelToken      
    }),
  logout : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/logout`,
      method: "GET",
      cancelToken,
      params: params,
            
    }),
  changePassword : (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/password`,
      method: "POST",
      params: params,
      cancelToken      
    }),  
  banks: (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/bank`,
      method: "GET",
      params: params,
      cancelToken
      
    })
  ,  
  banksAdd: (cancelToken, params) => 
    request({
      url: `${ROOT_URL}/user/bank/create`,
      method: "POST",
      params: params,
      cancelToken
      
    })
  ,  
}

const masterdata = {
  provincesAll: (cancelToken) => 
    request({
      url: `${ROOT_URL}/masterdata/province?perPage=-1`,
      method: "GET",
      cancelToken
    })
  ,
  provinces: (cancelToken) => 
    request({
      url: `${ROOT_URL}/masterdata/province`,
      method: "GET",
      cancelToken
    })
  ,
  cities : (cancelToken, provinceId) => 
    request({
      url: `${ROOT_URL}/masterdata/city/province/${provinceId}`,
      method: "GET",
      cancelToken,
  }),
  citiesAll : (cancelToken, provinceId) => 
    request({
      url: `${ROOT_URL}/masterdata/city/province/${provinceId}?perPage=-1`,
      method: "GET",
      cancelToken,
  }),
  cityProjects : (cancelToken, provinceId) => 
    request({
      url: `${ROOT_URL}/masterdata/city/project`,
      method: "GET",
      cancelToken,
  }),   
}

const banks = {
  get: (cancelToken) => 
    request({
      url: `${ROOT_URL}/bank`,
      method: "GET",
      cancelToken
      
    })
  ,
}

const paymentMethods = {
  get: (cancelToken) => 
    request({
      url: `${ROOT_URL}/payment-method`,
      method: "GET",
      cancelToken
      
    })
  ,
}

const transactions = {
  getList: (params, cancelToken) => 
    request({
      url: `${ROOT_URL}/user/project-transaction`,
      method: "GET",
      params: params,
      cancelToken
      
    })
  ,
}

export default {
  ROOT_URL,
  home,
  project,
  faqs,
  account,
  masterdata,
  banks,
  paymentMethods,
  transactions
};
