import { FlatList, View, Text, Image, ScrollView, StyleSheet } from "react-native-web";
import { useEffect, useState } from "react";
import ResultObjectReturn from "../components/ResultObjectReturn";
import PageHeader from "../components/PageHeader";
import { Link, router } from "expo-router";
import search from "../modules/search";
import { useSearchParams } from "expo-router/build/hooks";

export default function resultsPage() {
    let inputText = useSearchParams().get("input") || "";
    const [list, setList] = useState(null);

    if (list === null) {
        setList(search(inputText));
        console.log("List set: " + list);
    }

    if (list !== null && list.length === 0) {
        return (
            <>
                <PageHeader />
                <View style={styles.container}>
                    <Text style={styles.text}>No results for: "{inputText}"</Text>
                </View>
            </>
        );
    }

    console.log("List AFTER: " + list);

    let id = 0;

    return (
        <>
            <PageHeader />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginTop: 60 }}>
                    <FlatList
                        data={list}
                        renderItem={({ item }) => {
                            return (
                                <ResultObjectReturn
                                    //description={itemData.item.description}
                                    titleText={item.title}
                                    //keyNum={itemData.item.key}
                                    content={item.content}
                                    URL={item.url}
                                />
                            );
                        }}
                    />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "black",
    },
})