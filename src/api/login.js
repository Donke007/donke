import axios from "../utils/axios";

export function login(data) {
  return axios({
    url: "/mock/login",
    method: "post",
    data
  });
}
