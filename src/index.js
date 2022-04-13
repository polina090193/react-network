import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';
import App from '@/App';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const rerenderEntireTree = (state) => {
  root.render(<App state={store.getState()} />);
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
