import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Automotive', value: '1' },
  { label: 'Business', value: '2' },
  { label: 'Computer Science', value: '3' },
  { label: 'Construction', value: '4' },
  { label: 'Culinary', value: '5' },
  { label: 'Engineering', value: '6' },
  { label: 'Fashion', value: '7' },
  { label: 'Graphics', value: '8' },
  { label: 'Health Services', value: '9' },
  { label: 'Media (MeneMac)', value: '10' },
];


const DropdownComponent = () => {
  const [value, setValue] = useState(null);

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
      placeholder="Departments"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginRight: 20,
    height: 50,
    width: 175,
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
  },

  itemTextStyle: {
    color: 'white',
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
});