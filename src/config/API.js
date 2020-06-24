import { request } from "../utils/";

// const useAuth = true;

const home = {
  statistic: (cancelToken) =>
    request({
      url: `/home/statistic`,
      method: "GET",
      cancelToken,
    }),
  testimonial: (cancelToken) =>
    request({
      url: `/feature/testimonial`,
      method: "GET",
      cancelToken,
    }),
  opinion: (cancelToken) =>
    request({
      url: `/feature/opinion`,
      method: "GET",
      cancelToken,
    }),
  support: (cancelToken) =>
    request({
      url: `/feature/support`,
      method: "GET",
      cancelToken,
    }),
  featured: (cancelToken) =>
    request({
      url: `/feature/featured`,
      method: "GET",
      cancelToken,
    }),
};

const project = {
  get: (cancelToken) =>
    request({
      url: `/project`,
      method: "GET",
      cancelToken,
    }),

  getbyID: (cancelToken, slug) =>
    request({
      url: `/project/${slug}`,
      method: "GET",
      cancelToken,
    }),
};

const faqs = {
  get: (cancelToken) =>
    request({
      url: `/faq`,
      method: "GET",
      cancelToken,
    }),
};

const account = {
  register : ()
}
export default {
  home,
  project,
  faqs,
};
