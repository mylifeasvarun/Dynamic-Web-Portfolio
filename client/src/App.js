import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home/Home.js";
import Loader from "./components/Loader.js";

function App() {
  const [ShowLoading, SetShowLoading] = useState(false);

  const getportfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getportfolioData();
  }, []);

  return (
    <BrowserRouter>
      {ShowLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
