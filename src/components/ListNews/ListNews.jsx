import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import News from "../News/News";
import './ListNews.scss'

const ListNews = () => {
  const { getArticles } = useContext(GlobalContext);
  
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <div className="newspaper-container">
        <div className="newspaper">
          <div className="newspaper-header">Radikalex Post</div>
          <div className="newspaper-subhead">{Date().slice(0, 16)}</div>
          <News />
        </div>
      </div>
    </main>
  )
}

export default ListNews