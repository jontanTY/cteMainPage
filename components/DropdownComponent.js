import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const DropdownComponent = ({ children, arrData }) => {
  const [value, setValue] = useState(null);
  const navigation = useNavigation();

  const handleChange = (item) => {
    setValue(item.value);
    navigation.navigate(item.href);
  };

  const data = arrData;


  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      containerStyle={styles.containerStyle}
      itemTextStyle={styles.itemTextStyle}
      iconStyle={styles.iconStyle}
      showsVerticalScrollIndicator={false}
      activeColor='#23359d'
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={children}
      value={value}
      onChange={handleChange}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginRight: 20,
    height: 50,
  },

  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: 'grey',
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  containerStyle: {
    backgroundColor: '#23359d',
    borderColor: '#23359d',
    width: 175,
    marginTop: 18,
  },

  itemTextStyle: {
    color: 'white',
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
});