import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverContainer}>
        <Image
          source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.xEn8JrBb4Xm3TDrfmsgWhgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3w' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://morenoranches.com/wp-content/uploads/2017/11/AB180618-1939-38-1.jpg' }}
          style={styles.profilePhoto}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>Ntt Force</Text>
        <Text style={styles.bio}>Software Engineering Student 👨‍💻 | Limkokwing University</Text>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNum}>128</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNum}>1.2K</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNum}>340</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.editBtn}>
            <Ionicons name="pencil-outline" size={16} color="#fff" />
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <Ionicons name="share-social-outline" size={16} color="#333" />
            <Text style={styles.shareBtnText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  coverContainer: {
    position: 'relative',
    marginBottom: 60,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    bottom: -50,
    left: 20,
  },
  info: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E4E6EB',
    paddingVertical: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1877F2',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  buttons: {
    flexDirection: 'row',
  },
  editBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1877F2',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  editBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  shareBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E4E6EB',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareBtnText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
});