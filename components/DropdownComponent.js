import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

import Fonts from '../constants/fonts';

import {
  useFonts,
  BeVietnam_100Thin,
  BeVietnam_100Thin_Italic,
  BeVietnam_300Light,
  BeVietnam_300Light_Italic,
  BeVietnam_400Regular,
  BeVietnam_400Regular_Italic,
  BeVietnam_500Medium,
  BeVietnam_500Medium_Italic,
  BeVietnam_600SemiBold,
  BeVietnam_600SemiBold_Italic,
  BeVietnam_700Bold,
  BeVietnam_700Bold_Italic,
  BeVietnam_800ExtraBold,
  BeVietnam_800ExtraBold_Italic,
} from '@expo-google-fonts/be-vietnam-pro';

const DropdownComponent = ({ children, arrData }) => {
  const [value, setValue] = useState(null);
  const navigation = useNavigation();

  const handleChange = (item) => {
    setValue(item.value);
    navigation.navigate(item.href);
  };

  let [fontsLoaded] = useFonts({
    BeVietnam_100Thin,
    BeVietnam_100Thin_Italic,
    BeVietnam_300Light,
    BeVietnam_300Light_Italic,
    BeVietnam_400Regular,
    BeVietnam_400Regular_Italic,
    BeVietnam_500Medium,
    BeVietnam_500Medium_Italic,
    BeVietnam_600SemiBold,
    BeVietnam_600SemiBold_Italic,
    BeVietnam_700Bold,
    BeVietnam_700Bold_Italic,
    BeVietnam_800ExtraBold,
    BeVietnam_800ExtraBold_Italic,
  });
  
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
      data={arrData}
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
    fontFamily: Fonts.font300,
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
    fontFamily: Fonts.font300,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
});