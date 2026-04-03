import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avatar';

const NOTIFICATIONS = [
  { id: '1', name: 'Lebohang Mooena', action: 'liked your post.', time: '2m ago', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Lerotho Meseto', action: 'commented on your photo.', time: '10m ago', avatar: 'https://th.bing.com/th/id/R.40d994ed50e3cb48e93fb596fdba94c5?rik=E%2fFOVJ7GT%2f01xA&pid=ImgRaw&r=0' },
  { id: '3', name: 'Metsing Ls', action: 'shared your post.', time: '1h ago', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'David Lee', action: 'sent you a friend request.', time: '3h ago', avatar: 'https://i.pravatar.cc/150?img=4' },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notifItem}>
            <Avatar uri={item.avatar} size={48} />
            <View style={styles.notifText}>
              <Text style={styles.notifName}>
                {item.name} <Text style={styles.notifAction}>{item.action}</Text>
              </Text>
              <Text style={styles.notifTime}>{item.time}</Text>
            </View>
            <Ionicons name="ellipsis-horizontal" size={18} color="#888" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingTop: 55,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1c',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  notifItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 2,
  },
  notifText: {
    flex: 1,
    marginLeft: 10,
  },
  notifName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1c1c1c',
  },
  notifAction: {
    fontWeight: 'normal',
    color: '#333',
  },
  notifTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },
});