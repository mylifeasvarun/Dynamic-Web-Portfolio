import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://dynamic-web-portfolio-itcw.vercel.app/api"
    : "http://localhost:5001/api";

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export default instance;
