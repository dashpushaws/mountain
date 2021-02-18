
const reducer = (state = [], actionMethod) => {

  switch (actionMethod.type) {

    case 'ADD_REMOVE':
      return [...state, {...actionMethod.payload}]

    default:
      return state
  }
}
export default reducer



