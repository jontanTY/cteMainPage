import { useEffect, useState } from "react";
import { Text, Pressable, View, StyleSheet, Image } from "react-native-web";
import * as Linking from 'expo-linking';
import { Link } from "expo-router";

export default function ResultObjectReturn(props) {
    const [url, setURL] = useState("");

    const getInitialURL = async () => {
        const initialURL = await Linking.getInitialURL();
        if (initialURL) {
            setURL(initialURL);
        }
    };

    useEffect(() => {
        getInitialURL();
    }, []);

    function handlePress() {
        let searchInfo = {
            "URL": url,
            "query": props.input,
            "clicked": '1'
        };

        let searchString = JSON.stringify(searchInfo);
        console.log("clicked!", searchString);
    }

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Link href={props.URL} style={styles.titleStyle}>
                    {props.titleText}
                </Link>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.description}>
                    {props.content.slice(0, 100)}...
                </Text>
                <Image
                    source={require('../assets/favicon.png')}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    header: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});