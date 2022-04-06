import React from 'react';
import './index.css';
import App from './App';
import { root } from './index';

export default function rerenderEntireTree(state) {
    root.render(<App state={state} />);
}
