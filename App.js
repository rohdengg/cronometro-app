import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextComponent, View } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();
  const [isActive, setisActive] = useState(false);


  const startTimer = () => {
    if (!isActive) {
      setCustomInterval(
        setInterval(() => {
          changeTime();
        }, 1000)
      )
      setisActive(true)
    }
  };

  function stopTimer() {
    if (customInterval) {
      clearInterval(customInterval);
      setisActive(false)
    }
  }

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };

  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes((prevState) =>{
          return prevState + 1;
        });
        return 0;
      }
      return prevState +1;
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        {isActive ? (
          <Button title='Stop' onPress={stopTimer}/>
        ) : (
          <Button title='Start' onPress={startTimer}/>
        )}
        
        
        <Button title='clear' onPress={clear}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimer: {
    fontSize: 60,
  },
  buttonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
