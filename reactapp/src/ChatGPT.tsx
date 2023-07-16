import React, { useState } from 'react';

import {openaiKey,organizationID} from './config'
import axios from "axios";


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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      
        if (event.key === 'Enter') {
          sendMessageOpenAI()
          sendMessageGoogle()
          setRandNum(Math.random())
          setPickNow(true)
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
              {randNum < 0.5 && <div className='firstCol'>{openAI}</div>}
              {randNum >= 0.5 && <div className='firstCol'>{google}</div>}

              {randNum > 0.5 && <div className='secCol'>{openAI}</div>}
              {randNum <= 0.5 && 
              <div className='secCol'>{google}</div>}
            </div>
            {pickNow && 
            <div className='aiButtons'>
              <input className="prettyButton" type='button' value="Pick Me"/>
              <input className="prettyButton" type='button' value="Pick Me"/>
            </div>}

            

        </div>
    );
}

export default ChatGPT;