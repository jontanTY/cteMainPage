import { StyleSheet, Text, View, TextInput, Button } from "react-native-web";
import { Link } from "expo-router";
import { useState } from "react";
import MainButton from "./MainButton";
import { MultiSelect } from 'react-native-element-dropdown';
import DropdownComponent from "./DropdownComponent";
import { Image } from "react-native-web";
import { Linking } from 'react-native';
import Header from "./Header";
import SearchAndFilters from "./SearchAndFilter";

const departments = [
  { label: 'Automotive', value: '1', href: 'AutomotivePage' },
  { label: 'Business', value: '2', href: 'BusinessPage' },
  { label: 'Computer Science', value: '3', href: 'ComputerSciencePage' },
  { label: 'Construction', value: '4', href: 'BuildingAndConstructionPage' },
  { label: 'Culinary', value: '5', href: 'CulinaryPage' },
  { label: 'Engineering', value: '6', href: 'EngineeringPage' },
  { label: 'Fashion', value: '7', href: 'FashionPage' },
  { label: 'Graphics', value: '8', href: 'GraphicsPage' },
  { label: 'Health Services', value: '9', href: 'HealthServicesPage' },
  { label: 'Media (MeneMac)', value: '10', href: 'MediaPage' },
];

const teachers = [
  { label: 'Mr. Andersson', value: '1', href: 'AutomotivePage' },
  { label: 'Ms. Harada', value: '2', href: 'HealthPage' },
  { label: 'Mr. Hashizume', value: '3', href: 'EngineeringPage' }, //also hosa teacher
  { label: 'Mr. Ikenaga', value: '4', href: 'MediaPage' },
  { label: 'Ms. Kramer', value: '5', href: 'BusinessPage' },
  { label: 'Mr. Komar', value: '6', href: 'EngineeringPage' },
  { label: 'Mr. Masuda', value: '7', href: 'FashionPage' },
  { label: 'Mr. Mitsuda', value: '8', href: 'CulinaryPage' },
  { label: 'Mr. Murray', value: '9', href: 'ConstructionPage' },
  { label: 'Mr. Nishimura', value: '10', href: 'GraphicsPage' },
  { label: 'Ms. Pate', value: '11', href: 'BusinessPage' },
  { label: 'Ms. Perkins', value: '12', href: 'CulinaryPage' },
  { label: 'Ms. Yonamine', value: '13', href: 'BusinessPage' },
  { label: 'Mr. Zavala', value: '14', href: 'MediaPage' },
];

const clubs = [
  { label: 'Development Team (Coding Club)', value: '1', href: 'AutomotivePage' },
  { label: 'HOSA', value: '2', href: 'AutomotivePage' },
  { label: 'DECA', value: '3', href: 'AutomotivePage' },
  { label: 'Robotics', value: '4', href: 'AutomotivePage' },
  { label: 'FCCLA', value: '5', href: 'AutomotivePage' },
];

export default function PageHeader() {
  return (
    <View style={styles.searchContainer}>
      <SearchAndFilters/>
      <View style={{ marginLeft: 0, flexDirection: 'row-reverse', flex: 1 }}>
        <View style={{ flexDirection: 'row', marginTop: 2 }}>
          <DropdownComponent arrData={departments}> Departments </DropdownComponent>
          <DropdownComponent arrData={teachers}> Teachers </DropdownComponent>
          <DropdownComponent arrData={clubs}> Clubs </DropdownComponent>
        </View>

      </View>

      <View style={styles.leftAlign}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/moanaluaIcon.png')}
        />
        <Text style={styles.textStyle}>CTE</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 0.10,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 50,
    paddingTop: 10,
    width: '100%'
  },
  imageStyle: {
    height: 80,
    width: 80,
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5
  },
  leftAlign: {
    justifyContent: 'left',
    width: '55%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 55,
    paddingLeft: 16
  }
});