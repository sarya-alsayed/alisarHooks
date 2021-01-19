import axios from "./axios";
import API_KEY from "./key";

const getItems = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "user-key": API_KEY,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export default getItems;
