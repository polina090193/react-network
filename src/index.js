import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const messages = [
  { id: '1', from: 'John', time: '12:00', message: 'Hello world' },
  { id: '2', from: 'You', time: '12:01', message: 'Hi' },
  { id: '3', from: 'John', time: '12:02', message: 'How are you?' },
]

const contacts = [
  { id: '44', name: 'John' },
  { id: '88', name: 'Linda' },
]

const posts = [
  { id: 1, title: 'The first post' },
  { id: 2, title: 'The second post' },
]

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App messages={messages} contacts={contacts} posts={posts} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
