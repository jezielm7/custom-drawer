import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingIcon from 'react-native-vector-icons/Feather';

export default function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container} >
      <View style={styles.userArea} >
        <Image
          source={require('../../assets/user.png')}
          style={styles.avatar}
        />

        <Text style={styles.name} >Jeziel Marques</Text>
        <Text style={styles.email} >jezielm37@gmail.com</Text>
      </View>

      <View style={styles.navArea}>
        <View style={styles.buttonNav}>
          <Icon name="home" size={22} style={styles.homeIcon} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonNav}>
          <Icon name="user-cog" size={22} style={styles.userIcon} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.btnText}>Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonNav}>
          <SettingIcon name="settings" size={22} style={styles.setIcon} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.btnText}>Settings</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    marginTop: 15,
    marginLeft: 10,
    borderBottomWidth: 0.18,
    borderBottomColor: '#000',
  },
  avatar: {
    width: 75,
    height: 75,
  },
  name: {
    marginTop: 7,
    fontSize: 18,
    // opacity: 0.7,
    color: '#f2c144',
    fontWeight: 'bold',
  },
  email: {
    top: 3,
    fontSize: 15,
    opacity: 0.8,
    color: '#f2c144',
    marginBottom: 7,
  },
  navArea: {
    flex: 3.2,
    backgroundColor: 'rgba(48, 64, 80, 0.3)',
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonNav: {
    flexDirection: 'row',
  },
  homeIcon: {
    top: 22,
    left: 12,
    color: "#fff",
    marginRight: 14,
  },
  userIcon: {
    top: 22,
    left: 12,
    color: "#fff",
    marginRight: 14,
  },
  setIcon: {
    top: 22,
    left: 12,
    color: "#fff",
    marginRight: 14,
  },
});