import data from "./json/data.json";
export default {
  "get|/mock/getData": option => {
    console.log(option);
    return {
      status: 200,
      message: "success",
      data
    };
  },
  "post|/mock/login": option => {
    console.log(option);
    return {
      status: 200,
      message: "success",
      data
    };
  }
};
