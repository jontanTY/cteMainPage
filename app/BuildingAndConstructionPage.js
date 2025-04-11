import { Text, View } from "react-native-web";
import { Link } from "expo-router";

import PageTemplate from "../components/PageTemplate";

export default function BuildingAndConstructionPage() {
    return (
        <View>
            <Text>Building and Construction Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}