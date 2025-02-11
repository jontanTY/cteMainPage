import { StyleSheet, Text, View, TextInput } from "react-native-web";
import { Link } from "expo-router";
import { useState } from "react";
import MainButton from "./MainButton";
import { MultiSelect } from 'react-native-element-dropdown';
import DropdownComponent from "./DropdownComponent";
import { Image } from "react-native-web";

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
            <View style={{ marginRight: 50, borderWidth: 0, borderColor: 'grey', }}>
              <MultiSelect
                style={{ width: 130, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
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
            <DropdownComponent> Departments </DropdownComponent>
            <DropdownComponent> Teachers </DropdownComponent>
            <Link href='./BusinessPage'>
                <MainButton> Business Page </MainButton>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 0.17,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#eeeeee',
        backgroundColor: 'white',
    },
    textInputStyle: {
        marginLeft: -10,
        marginRight: 20,
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
        marginTop: -5,
        marginRight: 15,
        fontSize: 16,
    },
});