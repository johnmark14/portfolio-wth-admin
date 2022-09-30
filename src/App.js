import Home from "./pages/home";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData, HideLoading } from "redux/rootSlice";
import Admin from "pages/admin";

function App() {
  // const [showLoader, setShowLoader] = useState(true);

  // setTimeout(() => {
  //   setShowLoader(false);
  // }, 3000);
  // @ts-ignore
  const { loading } = useSelector((rootState) => rootState.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3200/api/portfolio/get-portfolio-data"
      );
      // console.log(response);
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    getPortfolioData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
