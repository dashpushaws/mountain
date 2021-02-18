
const reducer = (state = [{id:0},], actionMethod) => {

  // console.log('actionMethod.payload', actionMethod.payload)
  // for (let element of state){
  //   console.log('=========>', element.id)
  // }
  switch (actionMethod.type) {
    
    case 'like/ADD':
      for (let element of state){
        if(element.id != actionMethod.payload.id){
          state.splice(0, 0, actionMethod.payload)
        }


      }

      console.log('state------->', state);

      return state

      // let tempArray = [...actionMethod.payload]
      // state.splice(0, 0, tempArray.filter(item => item.id != ))
      // console.log(actionMethod)
      
      // console.log('state', state);
      // return [...state, {...actionMethod.payload}]

    case 'like/REMOVE':
      return [
        ...state.filter(item => item.id != actionMethod.payload.id)
      ]
    default:
      return state
  }
}
export default reducer