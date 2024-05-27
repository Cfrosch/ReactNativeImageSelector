import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer selectedImage={selectedImage} placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={pickImageAsync} theme="primary" label='Choose a photo'></Button>
        <Button label='Use this photo'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 1,
    marginTop: 68,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 2/3,
    alignItems: 'center'
  }
});
