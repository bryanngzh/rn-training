import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function ProfileScreen() {
  interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
  }

  interface Users {
    [key: string]: User;
  }

  const [users, setUsers] = useState<Users>();

  const getAllUsers = async (): Promise<void> => {
    try {
      const response = await fetch('http://192.168.1.164:3000/users');
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <View style={styles.container}>
      {users &&
        Object.values(users).map(user => (
          <View key={user.id}>
            <Text>{user.name}</Text>
            <Text>{user.lastName}</Text>
            <Text>{user.email}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
