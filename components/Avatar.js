import { View, Image, Text, StyleSheet } from 'react-native';

export default function Avatar({ uri, size = 40, showBorder = false, label = '' }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: uri || 'C:\Users\BIGSAM TECH\Documents\Social_Media_APP\FacebookRedesign/assets/3d-rendering-of-a-female-robot-head-with-glowing-particles-on-black-background-ai-generative-image-free-photo.jpg' }}
        style={[
          styles.avatar,
          showBorder && styles.border,
          size === 40 && styles.size40,
          size === 44 && styles.size44,
          size === 48 && styles.size48,
          size === 60 && styles.size60,
          size === 100 && styles.size100,
        ]}
      />
      {label ? <Text style={styles.label} numberOfLines={1}>{label}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
  border: {
    borderWidth: 2,
    borderColor: '#1877F2',
  },
  size40: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  size44: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  size48: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  size60: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  size100: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    color: '#333',
    maxWidth: 60,
    textAlign: 'center',
  },
});