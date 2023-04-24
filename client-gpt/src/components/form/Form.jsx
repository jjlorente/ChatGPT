import React from 'react'
import './Form.css'
import { useState } from 'react'

export const Form = (props) => {
  const apiUrl = 'http://localhost:5000';
  const [askForm, setAskForm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    props.sumbitAsk({question: askForm, response: ""})
    fetch(apiUrl + "/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: askForm }),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      props.updatePrompt(data);
    });

    const el =  document.getElementById("text-area")
    el.value = ""
    setAskForm("")
    el.style.height = '25px'
  }

  const handleChange = (event) => {
    event.target.value = event.target.value.replace(/(\r\n|\n|\r)/gm, "")
    setAskForm(event.target.value)
    
    const element = event.target;
    element.style.height = '25px'
    element.style.height = `${element.scrollHeight}px`
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && askForm) {
      handleSubmit(event);
    }
  }

  return (
    <div className='Form'>
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <textarea id='text-area' placeholder='Send a message...' onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
                <button type='submit' disabled={askForm ? false : true} style={{opacity: askForm ? 0.8 : 0.2, cursor: askForm ? 'pointer' : 'default'}}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
            </div>
        </form>
        <div className='span-version'>
            <span><u>ChatGPT Mar 23 Version.</u> Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.</span>
        </div>
    </div>
  )
}
