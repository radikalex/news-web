import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './ListNews.scss'

const ListNews = () => {
  const { getArticles } = useContext(GlobalContext);
  
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <div>
        sbafd
      </div>
    </main>
  )
}

export default ListNews