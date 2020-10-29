import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/b2beurope-80cfa/us-central1/api"
});

export default instance;
