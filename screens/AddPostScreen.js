import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddPostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>

      <View style={styles.userRow}>
        <Ionicons name="person-circle" size={44} color="#ccc" />
        <Text style={styles.username}>Masaena Seody</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        placeholderTextColor="#888"
        multiline
        numberOfLines={5}
        textAlignVertical="top"
      />

      <View style={styles.mediaButtons}>
        <TouchableOpacity style={styles.mediaBtn}>
          <Ionicons name="image-outline" size={22} color="#45BD62" />
          <Text style={styles.mediaBtnText}>Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mediaBtn}>
          <Ionicons name="videocam-outline" size={22} color="#F02849" />
          <Text style={styles.mediaBtnText}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mediaBtn}>
          <Ionicons name="happy-outline" size={22} color="#F7B928" />
          <Text style={styles.mediaBtnText}>Feeling</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.postBtn}>
        <Text style={styles.postBtnText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 16,
    textAlign: 'center',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1c1c',
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E4E6EB',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#333',
    minHeight: 120,
    backgroundColor: '#F0F2F5',
    marginBottom: 16,
  },
  mediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#E4E6EB',
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 20,
  },
  mediaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mediaBtnText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 6,
  },
  postBtn: {
    backgroundColor: '#1877F2',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#1877F2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  postBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});