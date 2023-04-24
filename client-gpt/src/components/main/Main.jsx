import React from 'react'
import { Form } from '../form/Form'
import { Example } from './examples/Example'
import { Prompt } from './prompts/Prompt'
import '../form/Form.css'
import './Main.css'
import { useState } from 'react'

export const Main = () => {
  const [prompt, setPrompt] = useState([])

  const sumbitAsk = async (objResponse) => {
    console.log( prompt )
    setPrompt(prevPrompt => [...prevPrompt, objResponse]);
  };

  const updatePrompt = (newResponse) => {
    setPrompt(prevPrompt => {
      const lastPrompt = prevPrompt[prevPrompt.length - 1];
      lastPrompt.response = newResponse;
      return [...prevPrompt];
    });
  };
  
  return (
    <div className='Main'>
      { Object.keys(prompt).length > 0 ? <Prompt prompt={prompt}/> : <Example/> }
      <Form prompt={prompt} sumbitAsk={sumbitAsk} updatePrompt={updatePrompt}/>
    </div>
  )
}
