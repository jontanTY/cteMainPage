import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function BusinessPage() {
    return (
        <View>
            <Text>Business Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}