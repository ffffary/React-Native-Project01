import { useState } from 'react'; // import the useState Hook from React
// A Hook is a special function that lets you “hook into” React features. 
import { 
  StyleSheet, 
  View,  
  FlatList,
  Button } from 'react-native';

import GoalItem from './components/GoalItem'; //哇自动加
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title="Add New Goal" 
        color="#3F52E3"
        onPress={startAddGoalHandler}
      />
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}
      />     
      <View style={styles.goalsContainer}> 
      <FlatList 
        data={courseGoals}
        renderItem={(itemData) => {  //itemData.item.text中的text: enteredGoalText
          return <GoalItem text={itemData.item.text}/>;  //GoalItem是GoalItem.js里面的function
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2, 
    paddingTop: 70,
    paddingHorizontal: 16,
  
  },

  goalsContainer: {
    flex: 3.5,
  },

});

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
//   goalsContainer: {
//     flex: 5,
//   },
// });