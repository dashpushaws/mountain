
const reducer = (state = [], action) => {
  let temp = state;
  console.log('변경전 state', temp);
  switch (action.type) {
    case 'like/ADD':
      if (state.findIndex(item => item.id == action.payload.id) == -1) {
        temp.unshift(action.payload)
      }
      return temp

    case 'like/REMOVE':
      // if (state.findIndex(item => item.id == action.payload.id) == -1) {
      //   temp.unshift(action.payload)
      // }
      // return temp

      return [
        ...state.filter(item => item.id != action.payload.id)
      ]
// 리스트에서 3개 넣고 라이크 확인후 리스트에서 다시 1개 넣는 테스트 하면 작동 이상함... 학원컴으로 확인

    default:
      return state
  }

}
export default reducer