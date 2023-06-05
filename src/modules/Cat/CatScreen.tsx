import React, {useState, useEffect} from 'react';
import {Button, Image, View, StyleSheet} from 'react-native';

interface CatData {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CatScreen = () => {
  const [cat, setCat] = useState<CatData>();

  const getCatPicture = async (): Promise<void> => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setCat(data[0]);
  };

  useEffect(() => {
    console.log(cat);
  }, [cat]);

  useEffect(() => {
    getCatPicture();
  }, []);

  return (
    <View style={styles.container}>
      {cat && <Image source={{uri: cat.url}} style={styles.img} />}
      <View style={styles.buttonContainer}>
        <Button title="Refresh" onPress={getCatPicture} />
      </View>
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
  img: {
    width: 200,
    height: 200,
    marginBottom: 10, // Add margin bottom for the image
  },
  buttonContainer: {
    marginEnd: 10,
  },
});

export default CatScreen;
