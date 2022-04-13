import * as ReactDOMClient from 'react-dom/client';
import App from '@/App';

const container = document.getElementById('root');
export const root = ReactDOMClient.createRoot(container);

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, title: 'The first post' },
        { id: 2, title: 'The second post' },
      ],
      newPostText: 'hi',
    },
    messagesPage: {
      contacts: [
        { id: '44', name: 'John' },
        { id: '88', name: 'Linda' },
      ],
      messages: [
        { id: '1', from: 'John', time: '12:00', message: 'Hello world' },
        { id: '2', from: 'You', time: '12:01', message: 'Hi' },
        { id: '3', from: 'John', time: '12:02', message: 'How are you?' },
      ],
    },
  },
  updateNewPostText(val) {
    this._state.profilePage.newPostText = val
    this.rerenderEntireTree(this._state)
  },
  addPost() {
    const newPost = {
      id: 8,
      title: this._state.profilePage.newPostText,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this.rerenderEntireTree(this._state)
  },
  rerenderEntireTree() {
    root.render(<App state={this._state} />);
  },
}

export default store