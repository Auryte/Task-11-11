import React, { useState, useEffect } from 'react';
import FormInput from '../../components/FormInput';
import Main from '../../components/Main';
import './formPage.css';
import '../../components/style.css';
import Popup from '../../components/Popup';

const FormPage = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [msg, setMsg] = useState('');

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handlePopupClose = () => {setPopupIsOpen(false)};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && message) {
      setTitle('');
      setMessage('');
      setMsg('')
      setPopupIsOpen(true)
    } else {
      setMsg('Please, fill in all the fields')
    }
  }

  return (

    <Main>
      <div className="FormContainer">
        <h3>Create new post</h3>
        <form onSubmit={handleSubmit} className='FormDetailsCard'>

          <FormInput
            title='Title'
            name='title'
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <div>
            <label className='FromDetailsLabel'>Your message</label>
            <textarea onChange={e => setMessage(e.target.value)} value={message} className='Textarea' name='message' > </textarea>
          </div>

          <button className='FormButton'> Submit </button>

          <div className='Message'>
            <h4>{msg}</h4>
          </div>

        </form>
        {
          popupIsOpen && <Popup
            content={<h4 className='PopupContentTitle'>Thank you for your message</h4>}
            handleClose={handlePopupClose}
          />
        }
      </div>
    </Main>

  )
}

export default FormPage;
