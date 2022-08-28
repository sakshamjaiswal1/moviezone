import React from "react";
import "./App.css";
import Banner from "./Banner";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Feed />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
