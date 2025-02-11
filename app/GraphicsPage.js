import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function GraphicsPage() {
    return (
        <View>
            <Text>Graphics Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}