import { Text, View } from "react-native-web";
import { ScrollView } from 'react-native';
import { Link } from "expo-router";
import PageTemplate from "../components/PageTemplate";

export default function BusinessPage() {
    return (
        <ScrollView>
            <Text>Business Page</Text>
            <Link href='/'>Go back home</Link>
        </ScrollView>
    )
}