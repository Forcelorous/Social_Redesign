import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CONVERSATIONS = [
  {
    id: '1',
    name: 'Letshekha',
    avatar: require('../assets/images/Story1.jpg'),
    lastMessage: 'otla neng morena?',
    time: '2m',
    unread: 3,
    online: true,
  },
  {
    id: '2',
    name: 'Khang',
    avatar: require('../assets/images/Story2.jpg'),
    lastMessage: 'Joetsa mokoao ono a nfounele',
    time: '15m',
    unread: 0,
    online: true,
  },
  {
    id: '3',
    name: 'Scalo',
    avatar: require('../assets/images/Story3.jpg'),
    lastMessage: 'Ok',
    time: '1h',
    unread: 1,
    online: false,
  },
  {
    id: '4',
    name: 'Khwahla',
    avatar: require('../assets/images/Story4.jpg'),
    lastMessage: 'Otla mpatala neng khoeli e felile?',
    time: '3h',
    unread: 0,
    online: false,
  },
  {
    id: '5',
    name: 'Mosia',
    avatar: require('../assets/images/Story5.jpg'),
    lastMessage: 'Sent a photo',
    time: '1d',
    unread: 0,
    online: true,
  },
];

function ConversationItem({ item }) {
  const nameStyle = item.unread > 0
    ? [styles.name, styles.nameUnread]
    : styles.name;

  const timeStyle = item.unread > 0
    ? [styles.time, styles.timeUnread]
    : styles.time;

  const lastMessageStyle = item.unread > 0
    ? [styles.lastMessage, styles.lastMessageUnread]
    : styles.lastMessage;

  return (
    <TouchableOpacity style={styles.conversationItem}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.online && <View style={styles.onlineDot} />}
      </View>

      <View style={styles.conversationInfo}>
        <View style={styles.conversationTop}>
          <Text style={nameStyle}>{item.name}</Text>
          <Text style={timeStyle}>{item.time}</Text>
        </View>
        <View style={styles.conversationBottom}>
          <Text style={lastMessageStyle} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

function ActiveItem({ item }) {
  return (
    <TouchableOpacity style={styles.activeItem}>
      <View style={styles.activeAvatarWrapper}>
        <Image source={item.avatar} style={styles.activeAvatar} />
        <View style={styles.activeDot} />
      </View>
      <Text style={styles.activeName} numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default function MessagesScreen() {
  const [search, setSearch] = useState('');

  const filtered = CONVERSATIONS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeUsers = CONVERSATIONS.filter((c) => c.online);

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="create-outline" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Active Now */}
      <View style={styles.activeNowContainer}>
        <Text style={styles.activeNowTitle}>Active Now</Text>
        <FlatList
          horizontal
          data={activeUsers}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.activeList}
          renderItem={({ item }) => <ActiveItem item={item} />}
        />
      </View>

      <View style={styles.divider} />

      {/* Conversations List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ConversationItem item={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No conversations found</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },

  // Active Now
  activeNowContainer: {
    paddingLeft: 16,
    marginBottom: 8,
  },
  activeNowTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
  },
  activeList: {
    paddingRight: 16,
  },
  activeItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 60,
  },
  activeAvatarWrapper: {
    position: 'relative',
  },
  activeAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  activeDot: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#31A24C',
    borderWidth: 2,
    borderColor: '#fff',
  },
  activeName: {
    fontSize: 11,
    color: '#333',
    marginTop: 4,
    textAlign: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F2F5',
    marginVertical: 8,
  },

  // Conversation Item
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#31A24C',
    borderWidth: 2,
    borderColor: '#fff',
  },
  conversationInfo: {
    flex: 1,
  },
  conversationTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  name: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
  },
  nameUnread: {
    fontWeight: '700',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  timeUnread: {
    color: '#1877F2',
    fontWeight: '600',
  },
  conversationBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    fontSize: 13,
    color: '#888',
    flex: 1,
  },
  lastMessageUnread: {
    color: '#000',
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#1877F2',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 14,
  },
});