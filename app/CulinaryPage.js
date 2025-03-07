import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function CulinaryPage() {
    return (
        <View>
            <Text>Culinary Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}