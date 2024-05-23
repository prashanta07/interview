import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
const MyComponent = ({data}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

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
    inputRef.current.clear();
    setDataSource(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContiner}>
        <TextInput
          ref={inputRef}
          onChangeText={setSearchTerm}
          value={searchTerm}
          style={styles.search}
          placeholder="Search"
        />
        <TouchableOpacity onPress={handleClear}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataSource}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          let isSelected = selectedItems.includes(item.id);
          return (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              style={{
                ...styles.nameConatiner,
                backgroundColor: isSelected ? 'green' : 'white',
              }}>
              <Text
                style={{
                  ...styles.name,
                  color: isSelected ? 'white' : 'black',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  searchContiner: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  search: {
    marginRight: 10,
    width: '85%',
    height: 40,
    padding: 10,
  },
  nameConatiner: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
  },

  name: {textAlign: 'center'},
});
export default MyComponent;
