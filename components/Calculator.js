import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';



export default function Calculator({ navigation }) {

  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [data, setData] = useState([]);
  
  


  const buttonPressedP = () => {
    setResult(parseInt(number1) + parseInt(number2));
    setData([...data, { key: number1 + "+" + number2 + "=" + result}]);
    
   
  };

  const buttonPressedM = () => {
    setResult(parseInt(number1) - parseInt(number2));
    setData([...data, { key: number1 + "-" + number2 + "=" + result}]);
    
  };
    
  return (
    <View style={styles.container}>
    <Text>{"Result: "}{result}</Text>
    <TextInput
      style={styles.input}
      onChangeText={number1 => setNumber1(number1)} 
      value={number1}
      keyboardType="numeric"
      clearButtonMode="always"
    />
    <TextInput
      style={styles.input}
      onChangeText={number2 => setNumber2(number2)} 
      value={number2}
      keyboardType="numeric"
      clearButtonMode="always"
    />
    <View style={styles.button}>
    <Button onPress={buttonPressedP} title="+" />
    <Button onPress={buttonPressedM} title="-"
     />
    <Button 
            title="History" onPress={() => 
            navigation.navigate("History", {data: data})}
        />
        </View>
        </View>

    );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});