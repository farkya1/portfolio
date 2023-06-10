import React, { useState } from 'react';
import axios from 'axios';
import {openaiKey} from './config'
import { response } from 'express';

function ChatGPT() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const sendMessage = async () => {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: inputText },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+openaiKey,
                },
            }
        ).then(response=>{
            const reply = response.data.choices[0].message.content;
            setOutputText(reply);
        }).catch(()=>{
            setOutputText("no good")
            return
        });


    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <div>{outputText}</div>
        </div>
    );
}

export default ChatGPT;