import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); //clear the userInput box onced a new goal gets added
      }

    return ( 
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}> 
                <Image style={styles.image} source={require('../assets/images/fary.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={'#3F52E3'}/>
                    </View>

                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={'#F12D2D'}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};




export default GoalInput;



// const styles = StyleSheet.create({
//     textInput: {
//         borderWidth: 1,
//         borderColor: '#cccccc',
//         width: '70%', //how much space does the text take from the overall box width
//         marginTop: 0.5,
//         marginRight: 8,
//         padding: 8, 
//       },

//     inputContainer: {
//     flex: 0.28,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItem: 'center',
//     marginBottom: 23,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#cccccc',
//     paddingTop: 15,
//     },

// })



const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      padding: 16,
    //   backgroundColor: '#B6EAFA',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '100%',
      padding: 8,
    },
    buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },
    button: {
      width: 100,
      marginHorizontal: 8
    }
  });


