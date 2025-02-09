import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Adolf</Text>
      <Text style={styles.email}>usuario@example.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6ED',
      },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    email: {
      fontSize: 18,
      color: 'gray',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
      },
  });

export default ProfileScreen;
