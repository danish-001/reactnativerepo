import React, {useState} from 'react';
import {View, FlatList, Alert, StyleSheet} from 'react-native';
// import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Lamborghini'},
    {id: Math.random(), text: 'Bugatti'},
    {id: Math.random(), text: 'Pagani'},
    {id: Math.random(), text: 'Koinigsegg'},
    {id: Math.random(), text: 'Ford'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Attention', 'Add an Item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shop It!" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
