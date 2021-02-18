// Action method

// action creator: 이파일 명칭
// dispatch는 action creator를 호출하는 거였다
// 그리고 dispatch가 호출결과 받는 값들이 action들
export const add = payload => (
  // action: 리턴하는 값들
  {
  type: 'like/ADD',
  payload: payload 
}
)

export const remove = payload => ({
  type: 'like/REMOVE',
  payload: payload 
})