import React from "react";
import Header from "./components/Header";
import MainContent from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
