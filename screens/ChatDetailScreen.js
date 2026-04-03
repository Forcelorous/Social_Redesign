import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, FlatList, TextInput, 
  TouchableOpacity, KeyboardAvoidingView, Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatDetailScreen({ route, navigation }) {
  // Get the name passed from the Messages screen
  const { userName } = route.params; 
  const [message, setMessage] = useState('');

  // Dummy chat data
  const [chatLog, setChatLog] = useState();

  const sendMessage = () => {
    if (message.trim().length > 0) {
      setChatLog();
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
      keyboardVerticalOffset={90}
    >
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1877F2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{userName}</Text>
        <Ionicons name="call" size={20} color="#1877F2" />
      </View>

      {/* Messages List */}
      <FlatList
        data={chatLog}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.sender === 'me' ? styles.myBubble : styles.theirBubble]}>
            <Text style={item.sender === 'me' ? styles.myText : styles.theirText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Aa"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', paddingTop: 50 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  listContent: { padding: 15 },
  bubble: { padding: 12, borderRadius: 20, marginBottom: 10, maxWidth: '80%' },
  myBubble: { alignSelf: 'flex-end', backgroundColor: '#1877F2' },
  theirBubble: { alignSelf: 'flex-start', backgroundColor: '#F0F2F5' },
  myText: { color: '#fff' },
  theirText: { color: '#000' },
  inputContainer: { flexDirection: 'row', padding: 10, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#eee' },
  input: { flex: 1, backgroundColor: '#F0F2F5', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8, marginRight: 10 },
});
