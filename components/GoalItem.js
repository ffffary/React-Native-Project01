import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}> 
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
};


export default GoalItem;

// const styles = StyleSheet.create({
//     goalItem: {
//         backgroundColor: '#D0F5BE',
//         margin: 8,
//         padding: 8,
//         borderRadius: 6,
        
//       },
    
//       goalText: {
//         color: 'black',
//       },
// });



const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#0079FF',
    },
    // pressedItem: {
    //   opacity: 0.5,
    // },
    goalText: {
      color: 'white',
      padding: 8,
    },
  });