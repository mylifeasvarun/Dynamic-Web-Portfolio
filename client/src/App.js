import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import { useState } from "react";
import Loader from "./components/Loader.js";

function App() {
  const [ShowLoading, SetShowLoading] = useState(false);
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
