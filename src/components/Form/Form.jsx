import React from 'react'
import './Form.scss'

const Form = () => {
  return (
    <main className='form-view'>
      <div className='form-container'>
        <form>
          <h1>New article</h1>

          <label htmlFor='title'>Title:</label>
          <input type="text" id='title' name='title' className='title' />

          <label htmlFor='author'>Author:</label>
          <input type="text" id='author' name='author' className='author' />

          <label htmlFor='image'>Url image:</label>
          <input type="text" id='image' name='image' className='image' />

          <label htmlFor='abstract'>Abstract:</label>
          <textarea id='abstract' name='abstract' className='abstract' rows='4'></textarea>

          <button type='submit' className='submit'>Submit</button>

        </form>
      </div>
    </main>
  )
}

export default Form