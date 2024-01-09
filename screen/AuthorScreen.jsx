import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const AuthorScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Авторы</Text>
      <View>
        <Text style={styles.AText}>Пименов Андрей</Text>
        <Text style={styles.AText}>Софронов Илья</Text>
        <Text style={styles.AText}>Лопатин Артур</Text>
      </View>
      <TouchableOpacity style={styles.prevBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.prevBtnText}>Назад</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
  },
  mainText: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
  },
  prevBtn: {
    width: 100,
    height: 80,
    // backgroundColor: '#F2F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // marginTop: 40,
  },
  prevBtnText: {
    color: 'blue',
    fontSize: 25,
  },
  AText: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 30,
  },
});

export default AuthorScreen;
