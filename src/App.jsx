import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout as the parent route */}
          <Route path="/" element={<Layout />}>
            {/* Nested pages */}
            <Route index element={<Home />} /> {/* "/" */}
            <Route path="profile" element={<Profile   />} /> {/* "/about" */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
