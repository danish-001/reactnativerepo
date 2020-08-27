import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

const Header = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'dodgerblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
