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
      avatar: 'https://riskonnect.com/wp-content/uploads/2021/05/blog-5-WFH-Risks-That-Are-Here-to-Stay.jpg',
      followed: true,
    },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FOLLOW: {
      if (action.userId) {
        const stateCopy = { ...state }
        stateCopy.users = [ ...state.users ]
        const userIndex = stateCopy.users.findIndex(user => user.id === action.userId)
        stateCopy.users[userIndex].followed = !stateCopy.users[userIndex].followed

        return stateCopy
      }
      break
    }

    default:
      return state
  }
}

export const toggleFollowCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId })

export default usersReducer