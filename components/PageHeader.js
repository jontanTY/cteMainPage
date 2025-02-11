import { StyleSheet, Text, View } from "react-native-web";
import { Link } from "expo-router";

import MainButton from "./MainButton";
import DropdownComponent from "./DropdownComponent";

const departments = [
    { label: 'Automotive', value: '1', href: 'AutomotivePage' },
    { label: 'Business', value: '2', href: 'BusinessPage' },
    { label: 'Computer Science', value: '3', href: 'CSPage' },
    { label: 'Construction', value: '4', href: 'ConstructionPage' },
    { label: 'Culinary', value: '5', href: 'CulinaryPage' },
    { label: 'Engineering', value: '6', href: 'EngineeringPage' },
    { label: 'Fashion', value: '7', href: 'FashionPage' },
    { label: 'Graphics', value: '8', href: 'GraphicsPage' },
    { label: 'Health Services', value: '9', href: 'HealthPage' },
    { label: 'Media (MeneMac)', value: '10', href: 'MediaPage' },
];

const teachers = [
    { label: 'Mr. Andersson', value: '1', href: 'AutomotivePage' },
    { label: 'Ms. Kramer', value: '2', href: 'BusinessPage' },
    { label: 'Ms. Yonamine', value: '3', href: 'BusinessPage' },
    { label: 'Ms. Pate', value: '4', href: 'BusinessPage' },
    { label: 'Mr. Murray', value: '5', href: 'ConstructionPage' },
    { label: 'Mr. Mitsuda', value: '6', href: 'CulinaryPage' },
    { label: 'Ms. Perkins', value: '7', href: 'CulinaryPage' },
    { label: 'Mr. Hashizume', value: '8', href: 'EngineeringPage' }, //also hosa teacher
    { label: 'Mr. Komar', value: '9', href: 'EngineeringPage' },
    { label: 'Mr. Masuda', value: '10', href: 'FashionPage' },
    { label: 'Mr. Nishimura', value: '11', href: 'GraphicsPage' },
    { label: 'Ms. Harada', value: '12', href: 'HealthPage' },
    { label: 'Mr. Zavala', value: '13', href: 'MediaPage' },
    { label: 'Mr. Ikenaga', value: '14', href: 'MediaPage' },

];

export default function PageHeader() {
    return (
        <View style={styles.searchContainer}>
            <Text style={styles.searchStyle}> Search </Text>
            <DropdownComponent arrData={departments}> Departments </DropdownComponent>
            <DropdownComponent arrData={teachers}> Teachers </DropdownComponent>
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

    searchStyle: {
        color: 'grey',
        marginRight: 20,
        fontSize: 16,
    },
});