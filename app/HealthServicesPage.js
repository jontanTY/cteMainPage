import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function HealthServicesPage() {
    return (
        <View>
            <Text>Health Services Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}