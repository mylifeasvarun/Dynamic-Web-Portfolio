import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5001/api" : "/api";

const instance = axios.create({ baseURL });

export default instance;
