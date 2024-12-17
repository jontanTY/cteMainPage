import { StyleSheet, Text } from "react-native";


export default function Header({ children }) {
    return (
        <Text style={styles.headerStyle}> {children} </Text>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 55,
    },
});