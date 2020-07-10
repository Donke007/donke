import data from "./json/data.json";
export default {
  "get|/api/getData": option => {
    console.log(option);
    return {
      status: 200,
      message: "success",
      data
    };
  }
};
