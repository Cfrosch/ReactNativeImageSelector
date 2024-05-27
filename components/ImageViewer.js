import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage}) {

  if(!selectedImage) {
    return (
      <Image source={placeholderImageSource} style={styles.image} />
    );
  }

  return (
    <Image source={{
      uri: selectedImage
    }} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
