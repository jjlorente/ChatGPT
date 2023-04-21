import React from 'react'
import './Form.css'
import { useState } from 'react'

export const Form = () => {

  const [ask, setAsk] = useState();

  const handleSubmit = (event) => {

    console.log("Entro")
    event.preventDefault(); 
  }

  const handleChange = (event) => {
    setAsk(event.target.value)
    console.log(event.target.value)
    event.preventDefault(); 
  }

  return (
    <div className='Form'>
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <textarea placeholder='Send a message...' onChange={handleChange}></textarea>
                <button type='submit' disabled={ask ? false : true} style={{opacity: ask ? 0.8 : 0.2, cursor: ask ? 'pointer' : 'default'}}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
            </div>
        </form>
        <div className='span-version'>
            <span><u>ChatGPT Mar 23 Version.</u> Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.</span>
        </div>
    </div>
  )
}
