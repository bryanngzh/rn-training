import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const TimerScreen = () => {
  const [minutes, setMinutes] = useState<number>(10);
  const [seconds, setSeconds] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: any;
    if (start) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    }; // when useEffect gets called again its return statement runs (to cleanup)
  }, [start, minutes, seconds]);

  const handleSecondsChange = (text: string) => {
    const secondsValue = parseInt(text, 10);
    if (!isNaN(secondsValue)) {
      setSeconds(secondsValue);
    }
  };

  const handleMinutesChange = (text: string) => {
    const minutesValue = parseInt(text, 10);
    if (!isNaN(minutesValue)) {
      setMinutes(minutesValue);
    }
  };

  const handleStart = () => {
    setStart(!start);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <TextInput
          value={minutes < 10 ? '0' + minutes.toString() : minutes.toString()}
          onChangeText={handleMinutesChange}
          style={styles.time}
          keyboardType="numeric"
        />
        <Text>:</Text>
        <TextInput
          value={seconds < 10 ? '0' + seconds.toString() : seconds.toString()}
          onChangeText={handleSecondsChange}
          style={styles.time}
          keyboardType="numeric"
        />
      </View>
      <Button title={start ? 'Stop' : 'Start'} onPress={() => handleStart()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: '20%',
  },
  timeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  time: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export default TimerScreen;
