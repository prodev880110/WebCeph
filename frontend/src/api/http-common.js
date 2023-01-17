import axios from "axios";

export default axios.create({
  baseURL: "http://AIOrthoServer.eba-n2nunase.sa-east-1.elasticbeanstalk.com:8000",
  headers: {
    "Content-type": "application/json"
  }
});