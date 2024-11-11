import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home/Home.js";
import Loader from "./components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice.js";
import Admin from "./pages/Admin/Admin.js";
import AdminLogin from "./pages/Admin/AdminLogin.js";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getportfolioData = async () => {
    try {
      dispatch(ShowLoading(true));
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getportfolioData();
    }
  },);

  useEffect(() => {
    if (reloadData) {
      getportfolioData();
    }
  },);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
