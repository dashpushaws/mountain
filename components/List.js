import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { mtData } from '../shared/domesticMountain'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'



// const n = Math.random();

const List = ({ navigation }) => {
  // console.log('test-------------->')
  console.log('===============List===============');
  const x = useSelector(state => state.likes);
  console.log(x);
  // console.log('------------------------');
  // console.log(n);
  // console.log('XXXXXXXXXXXXXXXXXXXXX');
  const list = mtData;

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow:1, justifyContent:"center" }}>
{/* 
            { 
            1. js 영역에서 배열로 jsx.element들을 가지고 있으면
    [<x></x>, <x2></x2>, ...] 
              { [<x></x>, <x2></x2>, ...] }   이렇게 가지고 있어야 컴포넌트가 됨
            }
            2. jsx.element영역에서 <x></x><x2></x2>... 와 같다
*/}
        {
          list.map((item, i) => 
            <ListItem key={i} onPress={()=>navigation.navigate("Detail", {id: item.id})}>
              <Avatar source={{uri: item.image}} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        } 
      </ScrollView>
    </View>
  )
  
}
export default List;


// <View style={styles.container}>   </View>

// const styles = StyleSheet.create({
//   pattern: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

// const List = ({ navigation }) => {
//   const list = mtData;
//   return (
//     <View style={{flex: 1}}>
//       <ScrollView 
//         contentContainerStyle={
//           { flexGrow:1, alignItems:"center", justifyContent:"center"}}
//           >
//             <ListItem 
//               containerStyle={{width:"80%"}} 
//             >
//               <ListItem.Content>
//                 <ListItem.Title>{list[0].title}</ListItem.Title>
//               </ListItem.Content>
//             </ListItem>
//           ))
//       </ScrollView>
//     </View>
//   )
// }
// export default List;