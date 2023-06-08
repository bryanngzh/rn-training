import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';

const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Cat" onPress={() => navigation.navigate('Cat')} />
      <View style={styles.buttonSpacing} />
      <Button title="Timer" onPress={() => navigation.navigate('Timer')} />
      <View style={styles.buttonSpacing} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonSpacing: {
    marginTop: 10,
  },
});

export default HomeScreen;
