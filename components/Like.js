import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Button, Icon } from 'react-native-elements'
import { mtData } from '../shared/MountainList'
import { add } from '../redux/action'

const Like = ({ navigation }) => {

  const like = useSelector(state => state.likeReducer);
  // const actions = useSelector(state => state.actions);
  console.log('test------>', like);
  
  
  const dispatch = useDispatch();

  return (
    // <View style={{flex:1}}>
    //   <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
    //   {

    //     star.map((item, i) => (
    //       <ListItem containerStyle={{width:"80%"}} key={i}>
    //         <Avatar source={{uri: item.image}} />
    //         <ListItem.Content>
    //           <ListItem.Title>{item.title}</ListItem.Title>
    //           <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    //         </ListItem.Content>
    //         <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeAction(item.id))}} />
    //       </ListItem>
    //     ))

    //   }
    //   </ScrollView>
    // </View>
    <></>
    )
}
export default Like;