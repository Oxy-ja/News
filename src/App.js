import React from "react";
import './App.css';
import NewsItems from "./components/NewsItemСopy";

function News() {
  return (
    <div className="news">
      <h1>Новости</h1>
      <NewsItems />
      
    </div>
  );
}

export default News;
