import rerenderEntireTree from "../render"

const state = {
  profilePage: {
    posts: [
      { id: 1, title: 'The first post' },
      { id: 2, title: 'The second post' },
    ],
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
}

export const addPost = (postTitle) => {
  const newPost = {
    id: 8,
    title: postTitle,
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state