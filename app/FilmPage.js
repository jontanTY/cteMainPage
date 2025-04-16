import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import PageTemplate from "../components/PageTemplate";

export default function FilmPage() {
    return (
        <View>
            <Text>Film Page</Text>
            <Link href='/'>Go back home</Link>
            <PageTemplate/>
        </View>
    )
}