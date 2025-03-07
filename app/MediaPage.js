import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function MediaPage() {
    return (
        <View>
            <Text>Media Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}