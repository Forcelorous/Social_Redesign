import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function StoryItem({ story, isAddStory = false }) {
  return (
    <TouchableOpacity style={styles.container}>
      {isAddStory ? (
        <View style={styles.addStory}>
          <Text style={styles.plus}>+</Text>
        </View>
      ) : (
        <View style={styles.avatarWrapper}>
          <Image
            source={story.avatar}
            style={styles.avatar}
          />
        </View>
      )}
      <Text style={styles.label}>
        {isAddStory ? 'Add Story' : story.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 12,
  },
  addStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E4E6EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1877F2',
    borderStyle: 'dashed',
  },
  plus: {
    fontSize: 28,
    color: '#1877F2',
    fontWeight: 'bold',
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1877F2',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    color: '#333',
  },
});