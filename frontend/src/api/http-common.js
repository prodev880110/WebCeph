import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.104.43:8000",
  headers: {
    "Content-type": "application/json"
  }
});