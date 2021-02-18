import { combineReducers } from 'redux'
import likeReducer from './reducer-like'
// import reducer2 from './reducer-2'

const rootReducer = combineReducers({
  likeReducer // state 호출 시, 이 이름을 사용. 작은 리듀서의 함수명x
  //reducer2 가 있다면, 2개의 리듀서가 있는것인데, state는 각각 독립
  
})
export default rootReducer;