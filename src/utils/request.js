import axios from "axios";
import { notification } from "ant-design-vue";

const request = function(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(err => {
      const {
        res: { status, statusText }
      } = err;
      notification.error({
        message: status,
        description: statusText
      });
      return Promise.reject(err);
    });
};

export default request;
