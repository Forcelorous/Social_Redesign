import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // 1. Import hook

export default function Navbar() {
  const navigation = useNavigation(); // 2. Initialize navigation

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>facebook</Text>
      
      <View style={styles.iconGroup}>
        {/* Search Button */}
        <TouchableOpacity style={styles.iconCircle}>
          <Ionicons name="search" size={20} color="black" />
        </TouchableOpacity>

        {/* 3. MESSAGE BUTTON (Top Right) */}
        <TouchableOpacity 
          style={styles.iconCircle} 
          onPress={() => navigation.navigate('Messages')} // Navigate to your Messages screen
        >
          <Ionicons name="chatbubble-ellipses" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 45, // Space for status bar
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1877F2',
    letterSpacing: -1,
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F2F5', // Light grey circle like your screenshot
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
