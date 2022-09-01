import React from "react";
import "./App.css";
import SignUp from "./SignUp";
import LoginUi from "./LoginUi";
import Banner from "./Banner";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/login" element={<LoginUi />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Banner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
