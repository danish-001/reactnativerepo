import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Lamborghini'},
    {id: uuid(), text: 'Bugatti'},
    {id: uuid(), text: 'Pagani'},
    {id: uuid(), text: 'Koinigsegg'},
    {id: uuid(), text: 'Ford'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shop It!" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
