import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function ComputerSciencePage() {
    return (
        <View>
            <Text>Conputer Science Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}