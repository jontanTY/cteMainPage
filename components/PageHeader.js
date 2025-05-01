import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { MultiSelect } from 'react-native-element-dropdown';
import DropdownComponent from "./DropdownComponent";
import { Image } from "react-native-web";
import Fonts from "../constants/fonts";


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
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);

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
    { label: 'People', value: '11' },
    { label: 'Events', value: '12' },
    { label: 'Dev Team', value: '13' },
    { label: 'HOSA', value: '14' },
    { label: 'DECA', value: '15' },
    { label: 'Robotics', value: '16' },
    { label: 'FCCLA', value: '17' },
  ];


  function handleResultPage() {
    console.log("lol");
    navigation.navigate("resultsPage", { input: input });
  }

  return (
    <View style={styles.searchContainer}>
      <Link href="/AboutUsPage" asChild>
      <Button title = 'ABOUT US ' style = {{width: 200, paddingLeft: 50,}}></Button>
      </Link> 
      <SearchAndFilters />
          
      <View style={{ marginLeft: 0, flexDirection: 'row-reverse', flex: 1 }}>
        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
          <DropdownComponent arrData={departments}> Departments </DropdownComponent>
          <DropdownComponent arrData={teachers}> Teachers </DropdownComponent>
          <DropdownComponent arrData={clubs}> Clubs </DropdownComponent>
          <Text style={styles.searchStyle}> Search </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setInput}
            value={input}
            onSubmitEditing={handleResultPage}
          />
        </View>
      </View>

      <View style={styles.leftAlign}>
        <Link href='/'>

          <Image
            style={styles.imageStyle}
            source={require('../assets/moanaluaIcon.png')}
          />
        </Link>
        <Text style={styles.textStyle}>Career Technical Education</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 0.1,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 50,
    paddingTop: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  searchStyle: {
    color: 'grey',
    marginTop: 13,
    marginRight: 15,
    fontSize: 16,
  },
  textInputStyle: {
    marginRight: 20,
    borderWidth: 2,
    borderColor: 'grey',
    width: 100,
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: 15,
    borderRadius: 5,
    //flex: 1,

  },

  searchStyle: {
    color: 'grey',
    marginTop: -5,
    marginRight: 15,
    fontSize: 16,

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
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 35,
    paddingLeft: 16,
    fontFamily: Fonts.font400,
  }
});