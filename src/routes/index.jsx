import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/sitePages/Home";
import Login from "../pages/adminPages/Login";

const Path = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />}/>
            <Route path="/cardapio" element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Path;
