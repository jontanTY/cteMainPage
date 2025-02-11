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