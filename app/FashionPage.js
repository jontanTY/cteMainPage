import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function FashionPage() {
    return (
        <View>
            <Text>Fashion Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}