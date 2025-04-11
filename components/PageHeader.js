import { StyleSheet, Text, View, TextInput, Button } from "react-native-web";
import { Link } from "expo-router";
import { useState } from "react";
import MainButton from "./MainButton";
import { MultiSelect } from 'react-native-element-dropdown';
import DropdownComponent from "./DropdownComponent";
import { Image } from "react-native-web";
import Header from "./Header";

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


export default function PageHeader() {
    const [input, setInput] = useState("");
    const [selected, setSelected] = useState([]);

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
      ];

    return (
      
        <View style={styles.searchContainer}>
          <View style={styles.headerContainer}>
            <View>
              <MultiSelect 
                style={{ width:110, marginRight: 25, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                placeholderStyle={{ color: 'grey'}}
                // iconStyle={styles.iconStyle}
                activeColor="lightgrey"
                itemTextStyle={{color: 'grey'}}
                selectedTextStyle={{color: 'grey', fontSize: 15}}
                inputSearchStyle={{width: 90}}
                showsVerticalScrollIndicator = {false}
                dropdownPosition="down"
                maxSelect={2}
                //search
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Filter"
                searchPlaceholder="Search..."
                value={selected}
                onChange={item => {
                  setSelected(item);
                }}
                renderLeftIcon={() => (
                  <Image
                    style={[{ height: 5, width: 5, opacity: 0 }]}
                    source={require('../assets/icon.png')}
                  />
                )}
              //selectedStyle={styles.selectedStyle}
              />
            </View>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={setInput}
              value={input}
            />
            <Text style={styles.searchStyle}> Search </Text>
            <DropdownComponent arrData={departments}> Departments </DropdownComponent>
            <DropdownComponent arrData={teachers}> Teachers </DropdownComponent>
            <Link href='./AboutUsPage'>
              <Button title = 'About Us'></Button>
            </Link>
            </View>
            <View style = {styles.leftAlign}>
              <Link href='..//index'>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/moanaluaIcon.png')}
                />
              </Link>
              <Text style={styles.textStyle}>CTE</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        height: 100,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingBottom: 50,
        paddingTop: 10,
        width: '100%'
        },

    headerContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginRight: 100,
      marginTop: 15,
      
    },

    textInputStyle: {
  
        borderWidth: 2,
        borderColor: 'grey',
        width: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        //flex: 1,
      },
    searchStyle: {
        color: 'grey',
    
        fontSize: 16,
    },

    imageStyle: {
        height:80,
        width: 80,
        flexDirection: 'row',
      
    },

    leftAlign:{
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      top: -10,
      left: 10,
      flex: 0.1,
      marginRight: -100,
      marginTop: 10,
    
    },
    textStyle: {
      fontSize: 55,
      
    }
});