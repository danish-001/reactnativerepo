import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = (textvalue) => {
    setText(textvalue);
  };

  const add = () => {
    setText('');
    addItem(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Items..."
        style={styles.input}
        onChangeText={onChange}
        defaultValue={text}
      />
      <TouchableOpacity style={styles.btn} onPress={() => add()}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: 'lightblue',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
