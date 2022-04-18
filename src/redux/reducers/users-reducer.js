const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Polina',
      city: 'Saint-Petersburg',
      country: 'Russia',
      status: 'Hello world',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRBVn3s5fiub902vkIHtaCAvBmxXBmuH7mg&usqp=CAU',
      followed: true,
    },
    {
      id: 2,
      name: 'Jonas',
      city: 'Berlin',
      country: 'Germany',
      status: 'Let\'s move',
      avatar: 'https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      followed: false,
    },
    {
      id: 3,
      name: 'Linda',
      city: 'Vienna',
      country: 'Austria',
      status: 'Working from home',
      avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fquasa.io%2Fmedia%2Ftop-10-challenges-of-working-from-home-for-employers&psig=AOvVaw3BaQvgWZfk3-Fy1WlMXvia&ust=1650362583363000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDLnfCtnfcCFQAAAAAdAAAAABAJ',
      followed: true,
    },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {



    default:
      return state
  }
}

export const toggleFollowCreator = () => ({ type: TOGGLE_FOLLOW })

export default usersReducer