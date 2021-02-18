import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Tile, Icon, Button } from 'react-native-elements';
import { mtData } from '../shared/MountainList'

import { add, remove } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const Detail = ({ route }) => {
  const list = mtData;
  const { id } = route.params;
  const item = list.filter( item => item.id == id)[0];
  // console.log('item', item)
  const dispatch = useDispatch();
  return (
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
          <Card.Image source={{uri: item.image}} />
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            {item.description}
        </Text>
        <Icon
                raised
                name='favorite'
                type='material'
                color='#FF3333'
                onPress={() => {
                  console.log('----->add')
                  dispatch(add(item))
                 }}
        />
        <Icon
                raised
                name='favorite-border'
                type='material'
                color='#FF3333'
                onPress={() => {
                  console.log('----->remove')
                  dispatch(remove(item))
                 }}
        />
            {/* 아이콘 눌렀을때 아이콘 모양이 변하는 걸로 바꾸기 */}
        
      </Card>


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