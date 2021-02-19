import React from 'react';
import { Text, View } from 'react-native';
import { Card, colors, Icon } from 'react-native-elements';
import { mtData } from '../shared/domesticMountain'

import { add, remove, checkState, climb, unclimb } from '../redux/actioncreator'
import { useDispatch, useSelector } from 'react-redux'

const Detail = ({ route }) => {
  const list = mtData;
  const { id } = route.params;
  const dispatch = useDispatch();

  const item = list.filter( item => item.id == id)[0];
  
  const likes = useSelector(state => state.likes);
  const isExistedLike = likes.filter(item => item.id == id).length > 0 ? true : false;

  const flag = useSelector(state => state.flag);
  const isClimbed = flag.filter(item => item.id == id).length > 0 ? true : false;

  console.log('렌더링 난수', Math.random())
  return (
    <View>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
          <Card.Image source={{uri: item.image}} />
        <Card.Divider/>
        <Text style=
        {{
          marginBottom: 10,
          marginLeft: 10,
          color: '#000',
          }}>
            {"위치: " + item.location}
        </Text>
        <Text style=
        {{
          marginLeft: 10,
          color: '#000',
          }}>
            {"높이: " + item.height}
        </Text>
        
        {
          isExistedLike ?
          <Icon
            raised
            name='favorite'
            type='material'
            color='#FF3333'
            onPress={() => {
              dispatch(remove(item))
              }}
            title={"dd"}
          />
          :
          <Icon
            raised
            name='favorite-border'
            type='material'
            color='#FF3333'
            onPress={() => {
              console.log('add----->')
              dispatch(add(item))
              }}
          />
        }
        {
          isClimbed ?
          <Icon
            raised
            name='flag'
            type='entypo'
            color='#009900'
            onPress={() => {
              dispatch(unclimb(item))
           }}
          />
          :
          <Icon
            raised
            name='atlassian'
            type='fontisto'
            color='#FFCC00'
            onPress={() => {
              dispatch(climb(item))
           }}
          />
        }
        {/* <Icon
                raised
                name='favorite'
                type='material'
                color='#FF3333'
                onPress={() => {
                  console.log('add----->')
                  dispatch(add(item))
                 }}
        />
        <Icon
                raised
                name='favorite-border'
                type='material'
                color='#FF3333'
                onPress={() => {
                  // console.log('remove----->', remove(item))
                  // console.log('remove2---->', dispatch(remove(item)))
                  dispatch(remove(item))
                 }}
        />
            
         */}
        <Icon //아이콘 눌렀을때 아이콘 모양이 변하는 걸로 바꾸기
                raised
                name='sc-telegram'
                type='evilicon'
                color='#FF3333'
                onPress={() => {
                  console.log('checkState----->')
                  dispatch(checkState(item))
                 }}
        />

      </Card>
    </View>

      // <Tile
      // imageSrc={{uri: item.image}}
      // title={item.title}
      // // icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
      // contentContainerStyle={{ height: 50 }}
      // >
      //       {/* <Button onPress={() => console.log('hello') } title='ACTION' /> */}
      //       <Icon
      //           raised
      //           name='heartbeat'
      //           type='font-awesome'
      //           color='#f50'
      //           onPress={() => console.log('hello')} />

      // </Tile>



    )
}
export default Detail;