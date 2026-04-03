import { View, FlatList, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import StoryItem from '../components/StoryItem';
import PostCard from '../components/PostCard';


const STORIES = [
  { id: '1', name: 'Letshekha', avatar: require('../assets/images/Story1.jpg') },
  { id: '2', name: 'Khang',   avatar: require('../assets/images/Story2.jpg') },
  { id: '3', name: 'Scalo', avatar: require('../assets/images/Story3.jpg') },
  { id: '4', name: 'Khwahla', avatar: require('../assets/images/Story4.jpg') },
  { id: '5', name: 'Mosia',   avatar: require('../assets/images/Story5.jpg') },
];

const POSTS = [
  {
    id: '1',
    username: 'Ntt Force',
    avatar: 'https://morenoranches.com/wp-content/uploads/2017/11/AB180618-1939-38-1.jpg',
    time: '2 mins ago',
    content: 'Hola hantle Boy, ntt Force oo lakaletsa mahlohonolo tsatsing la Paseka.',
    image: 'https://img.freepik.com/premium-photo/present-car_110488-1218.jpg',
    likes: 42,
    comments: 8,
  },
  {
    id: '2',
    username: 'Semethe Mejaro',
    avatar: 'https://tse4.mm.bing.net/th/id/OIP.R9kv-piIizktyHVIBS0phwHaEv?rs=1&pid=ImgDetMain&o=7&rm=3',
    time: '15 mins ago',
    content: 'Jeso are "Mosali bona mora oa hao ke eo"',
    image: null,
    likes: 18,
    comments: 3,
  },
  {
    id: '3',
    username: 'Letshekha Wa Kwete',
    avatar: 'https://th.bing.com/th/id/R.f85e7dfe795a3b8361f3ac4a0c4af790?rik=%2bNvBGnxeFj2vDA&riu=http%3a%2f%2fwww.herbgarden.co.za%2fmountainherb%2fwebherbfotos%2fbig_WildDaggaOrange1.JPG&ehk=y6Elxx0B7PhcztF5mflKGpo8MR4iEvCFCSDf9tIjmXY%3d&risl=&pid=ImgRaw&r=0',
    time: '1 hour ago',
    content: 'Pere ea poho likwata',
    image: 'https://i.pinimg.com/474x/9c/22/94/9c2294c3ac35b299274ddf2d0ab89a10.jpg',
    likes: 95,
    comments: 21,
  },
];

export default function HomeScreen() {
  const ListHeader = () => (
    <View>
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <StoryItem isAddStory />
          {STORIES.map((story) => (
            <StoryItem key={story.id} story={story} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.createPost}>
        <Ionicons name="person-circle" size={40} color="#ccc" />
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          placeholderTextColor="#888"
          editable={false}
        />
        <TouchableOpacity>
          <Ionicons name="image-outline" size={26} color="#45BD62" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  storiesContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 8,
  },
  createPost: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#F0F2F5',
    marginHorizontal: 10,
  },
  divider: {
    height: 8,
    backgroundColor: '#F0F2F5',
  },
});