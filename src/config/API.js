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

// const account = {
//   register : ()
// }
export default {
  home,
  project,
  faqs,
};
