import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Буквоцифры</Text>

      <TouchableOpacity style={styles.prevBtn} onPress={() => navigation.navigate('Input')}>
        <Text style={styles.prevBtnText}>Начать игру</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.prevBtn} onPress={() => navigation.navigate('Author')}>
        <Text style={styles.prevBtnText}>Авторы</Text>
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
  },
  mainText: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
  },
  prevBtn: {
    // width: 100,
    // height: 50,

    backgroundColor: '#2EABFF',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 40,
  },
  prevBtnText: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
});

export default HomeScreen;
