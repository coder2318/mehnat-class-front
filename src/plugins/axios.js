import axios from "axios";

export default function() {
  axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.post["Content-Type"] = "application/json";
}
