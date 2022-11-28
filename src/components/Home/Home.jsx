import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <main className='home-view'>
      <div className='home-container'>
        <h1>Home</h1>
        <p>This page has been created mainly to practice the use of the Context API. The API chosen to make the requests is <a href='https://developer.nytimes.com/apis' target='_blank' rel='noreferrer'>News API</a> and specifically Top Stories API. From this API we get the news to display on the 'Articles' page.</p>
        <ul>
          <li><span className='page'>Home:</span> This is the current page, on it you see a brief summary of the page.</li>
          <li><span className='page'>Articles:</span> This page shows the articles simulating a newspaper. Above there are two filters that can be used to modify the section to which the articles belongs and the other filter to search for a articles by title.</li>
          <li><span className='page'>Add new article:</span> This page is just a form to add a new article. The new article is added to localStorage and will be displayed on the 'Articles' page.</li>
        </ul>
      </div>
    </main>
  )
}

export default Home