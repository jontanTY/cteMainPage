import { StyleSheet, Text, View } from "react-native-web";
import { Link } from "expo-router";

import MainButton from "./MainButton";
import DropdownComponent from "./DropdownComponent";

export default function PageHeader() {
    return (
        <View style={styles.searchContainer}>
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

    searchStyle: {
        color: 'grey',
        marginRight: 20,
        fontSize: 16,
    },
});