import Axios from "axios";

const api = Axios.create({
  baseURL: "https://polls.apiblueprint.org/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async function (err) {
    try {
      if (err.code === "ERR_NETWORK") {
        err.response = {
          data: {
            status_message: "Cannot connect to internet. Check your connection",
          },
        };
      } else if (!err.response) {
        err.response = {
          data: {
            status_message: "Something went wrong. Try again later",
          },
        };
      } else if (!err.response.data?.status_message) {
        err.response.data = {
          ...err.response.data,
          status_message: "Something went wrong. Try again later",
        };
      }
      return Promise.reject(err);
    } catch (error) {
      return Promise.reject(err);
    }
  }
);
export default api;
