import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './News.scss'

const News = (props) => {
    const { articles } = useContext(GlobalContext);
    const fonts = ['playfair', 'noticia', 'chomsky', 'eroded']

    const news = articles.map((article, idx) => {
        return (
            <React.Fragment key={idx}>
            {   article.title !== '' && (new RegExp(`${props.filter}`, 'gmi')).test(article.title)
                ? <div className='new-card'>
                    <div className={`new-card-title ${fonts[( (/[0-9]/gm).test(article.title) ? idx % (fonts.length - 1) : idx % fonts.length)]}`}>{ article.title }</div>
                    <div className='new-card-byline'>{ article.byline }</div>
                    <div className='new-card-body'>
                        { article.multimedia ? <img className='new-card-image' src={article.multimedia[0].url} alt="Article multimedia" /> : null }
                        <p>{ article.abstract }</p>
                        <p>{ article.abstract }</p>
                        <p>{ article.abstract }</p>
                    </div>
                  </div>
                : null
            }
          </ React.Fragment>
        );
    });

    return (
        <div className="news-container">
            {news}
        </div>
    )
}

export default News
