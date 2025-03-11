import { Text, View } from "react-native-web";
import { Link } from "expo-router";

export default function EngineeringPage(){
    return (
        <View>
            <Text>Engineering Page</Text>
            <Link href='/'>Go back home</Link>
        </View>
    )
}