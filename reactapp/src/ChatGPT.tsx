import React, { useState } from 'react';
import {openaiKey,organizationID} from './config'


import { Configuration, OpenAIApi,  } from "openai";
const configuration = new Configuration({
    apiKey: openaiKey,
    organization:organizationID
});
const openai = new OpenAIApi(configuration);

function ChatGPT() {
    const [inputText, setInputText] = useState('type something');
    const [outputText, setOutputText] = useState('');
  
    const sendMessage = async () => {
      try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: inputText }
          ]
        });

        const messageContent = response?.data?.choices?.[0]?.message?.content ?? '';
        setOutputText(messageContent);
        
      } catch (error) {
        console.error(error);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      
        if (event.key === 'Enter') {
          sendMessage()
        }
      };

    return (
        <div>
            
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} 
                onKeyDown={handleKeyDown}
                />
            <div>{outputText}</div>
        </div>
    );
}

export default ChatGPT;