import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { v1 as uuidv1 } from 'uuid';

export default function App() {
  /* https://gist.github.com/delapuente/9001607 */
  const [tasks, setTasks] = useState([
    {"task":"HTML I","done":true, "id":"1"},
    {"task":"CSS","done":true, "id":"2"},
    {"task":"Responsive design","done":true, "id":"3"}
    ])

  const addTask = (text)=>{
    if(!text){
      Alert.alert('No task?','Plase add a task')
    }else{
      setTasks(prevTasks=>{
        return [{task:text, id:uuidv1()}
          ,...prevTasks]
      })  
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTask addTask={addTask}/>
          <View style={styles.list}>
            <FlatList
              data ={tasks}
              renderItem={({ item })=>(
                <Tasks item={item}/>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding:30
  },
  list:{
    marginTop:30
  }
});
