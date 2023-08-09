import React, { useEffect, useState } from 'react';

import {openaiKey,organizationID} from './config'
import axios from "axios";
import openImage from "./openai.png"
import googleImage from "./google.png"


import { Configuration, OpenAIApi,  } from "openai";
const configuration = new Configuration({
    apiKey: openaiKey,
    organization:organizationID
});
const openai = new OpenAIApi(configuration);




function ChatGPT() {
    const [inputText, setInputText] = useState('type something');
    const [openAI, setOpenAI] = useState('');
    const [google, setGoogle] = useState('');
    const [randNum, setRandNum] = useState(0)
    const [pickNow, setPickNow] = useState(false)
    const [reveal, setReveal] = useState(false)

    const [leftStyle, setleftStyle] = useState(false);
    const [rightStyle, setrightStyle] = useState(false);

    const [buttonHide, setButtonHide] = useState(false)

    useEffect(()=>{

    },[reveal])

    
  
    const sendMessageOpenAI = async () => {
      try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo-16k-0613',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: inputText }
          ]
        });

        const messageContent = response?.data?.choices?.[0]?.message?.content ?? '';
        setOpenAI(messageContent);
        
      } catch (error) {
        console.error(error);
      }
    };


    const sendMessageGoogle = async () => {

      const url = "http://localhost:5000/getGoogle";

      await axios.get(url, {
        params: {
          input: inputText,
        },
      })
        .then((response) => {
          console.log(response.data);
          setGoogle(response.data)
        })
        .catch((error) => {
          console.error(error);
        });

    }

      const leftTextStyle = {
        color: leftStyle ? 'gold' : "white",
      };

      const rightTextStyle = {
        color: rightStyle ? 'gold' : "white",
      };

      const hideButton = {
        display: buttonHide ? 'none' : "block",
      };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      
        if (event.key === 'Enter') {
          sendMessageOpenAI()
          sendMessageGoogle()
          setRandNum(Math.random())
          setPickNow(true)
          setReveal(false)
          setleftStyle(false)
          setrightStyle(false)
          setButtonHide(false)
        }
      };

    return (
        <div>
          <h2>OpenAI vs Google AI</h2>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} 
                onKeyDown={handleKeyDown}
                />
            <div className='aiContainer'>            
              {randNum < 0.5 && <div className='firstCol'><div>{reveal && <h3 style={leftTextStyle}>OpenAI</h3>}</div><div>{openAI}</div></div>}
              {randNum >= 0.5 && <div className='firstCol'><div>{reveal && <h3 style={leftTextStyle}>Google</h3>}</div><div>{google}</div></div>}

              {randNum > 0.5 && <div className='secCol'><div>{reveal && <h3 style={rightTextStyle}>OpenAI</h3>}</div><div>{openAI}</div></div>}
              {randNum <= 0.5 && 
              <div className='secCol'><div>{reveal && <h3 style={rightTextStyle}>Google</h3>}</div><div >{google}</div></div>
              }
            </div>
            {pickNow && 
            <div className='aiButtons'>
              <input className="prettyButton" style={hideButton} type='button' value="Pick Me" onClick={()=>{
                setReveal(true)
                setleftStyle(true)
                setButtonHide(true)
                }}/>
              <input className="prettyButton" style={hideButton} type='button' value="Pick Me" onClick={()=>{
                setReveal(true) 
                setrightStyle(true)
                setButtonHide(true)
                }}/>
            </div>}

            

        </div>
    );
}

export default ChatGPT;