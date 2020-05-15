import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer({ ...props }) {
  return (
    <View style={styles.container} >
      <View style={styles.userArea} >
        <Image 
          source={require('../../assets/user.png')}
          style={styles.avatar}
        />

        <Text style={styles.name} >Jeziel Marques</Text>
        <Text style={styles.email} >jezielm37@gmail.com</Text>

        <DrawerItemList {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(48, 64, 80, 0.9)',
  },
  userArea: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 75,
    height: 75,
  },
  name: {
    marginTop: 7,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  email: {
    top: 3,
    fontSize: 15,
    color: '#fff',
    marginBottom: 14,
  },
});