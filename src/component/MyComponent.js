import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import CustomText from './CustomText';
import SearchBar from './SearchBar';
const MyComponent = ({data}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setDataSource(data);
  }, [data]);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setDataSource(data.filter(item => item.name.includes(searchTerm)));
    }, 1000);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchTerm]);

  const handleSelect = item => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(currentSelectedItems =>
        currentSelectedItems.filter(id => id !== item.id),
      );
    } else {
      setSelectedItems(currentSelectedItems => [
        ...currentSelectedItems,
        item.id,
      ]);
    }
  };
  const handleClear = () => {
    setSearchTerm('');
  };

  const renderItem = ({item}) => {
    let isSelected = selectedItems.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={{
          ...styles.nameConatiner,
          backgroundColor: isSelected ? 'green' : 'white',
        }}>
        <CustomText
          text={item.name}
          textStyle={{
            ...styles.name,
            color: isSelected ? 'white' : 'black',
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={setSearchTerm}
        handleClear={handleClear}
        value={searchTerm}
      />
      <FlatList
        data={dataSource}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  nameConatiner: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
  },
  name: {textAlign: 'center'},
});
export default MyComponent;
