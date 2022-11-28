import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.scss'

const Form = () => {
  let navigate = useNavigate();
  const initialState = {
    title: "",
    author: "",
    image_url: "",
    abstract: ""
  };
  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [submitCorrect, setSubmitCorrect] = useState(false);

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    setVisible(true)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (data.title.trim() === '') {
      setValidationMessage("Title can't be empty");
      setBtnDisabled(true);
    } else if (data.author.trim() === '') {
      setValidationMessage("Author can't be empty");
      setBtnDisabled(true);
    } else if (data.abstract.trim() === '') {
      setValidationMessage("Abstract can't be empty");
      setBtnDisabled(true);
    } else {
      setValidationMessage(null);
      setBtnDisabled(false);
      setVisible(false)
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const localStorage_news = JSON.parse(localStorage.getItem('localStorage_news')) || [];
    localStorage_news.push({
      title: data.title,
      byline: `By ${data.author}`,
      multimedia: data.image_url.trim() ? [{url: data.image_url}] : null,
      abstract: data.abstract
    })
    localStorage.setItem('localStorage_news', JSON.stringify(localStorage_news))
    clearState();
    setTimeout(() => {
        navigate('/list')
    }, 3000);
    setSubmitCorrect(true)
    setVisible(false)
  };

  return (
    <main className='form-view'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h1>New article</h1>

          <label htmlFor='title'>Title:</label>
          <input type="text" id='title' name='title' className='title' value={data.title} onChange={handleInputChange}/>

          <label htmlFor='author'>Author:</label>
          <input type="text" id='author' name='author' className='author' value={data.author} onChange={handleInputChange}/>

          <label htmlFor='image'>Url image:</label>
          <input type="text" id='image' name='image_url' className='image' value={data.image_url} onChange={handleInputChange}/>

          <label htmlFor='abstract'>Abstract:</label>
          <textarea id='abstract' name='abstract' className='abstract' rows='4' value={data.abstract} onChange={handleInputChange}></textarea>

          <span className="validation-error">{ visible ? validationMessage : null }</span>
          <span className="validation-success">{ submitCorrect ? 'Redirecting to articles...' : null }</span>

          <button type='submit' className='submit' disabled={btnDisabled}>Submit</button>

        </form>
      </div>
    </main>
  )
}

export default Form