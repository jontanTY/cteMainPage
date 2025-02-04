import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function AutomotivePage() {
    return (
        <View>
            <Text>Automotive Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}