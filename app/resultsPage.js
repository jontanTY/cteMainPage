import { FlatList, View, Text, Image, ScrollView } from "react-native-web";
import { useEffect, useState } from "react";
import ResultObjectReturn from "../components/ResultObjectReturn";
import PageHeader from "../components/PageHeader";
import { Link } from "expo-router";
import search from "../modules/search";
import { useSearchParams } from "expo-router/build/hooks";

export default function resultsPage() {
    const [list, setList] = useState(null);

    let inputText = useSearchParams().get("input") || "";
    if (list === null) {
        setList(search(inputText));
    }
    let id = 0;

    // function addResult(enterText, enterSubtext) {
    //     //makes list equal to a newList that adds a new result that has these components (title, )
    //     setList((newlist) => [{ title: enterText, description: enterSubtext, key: id.toString()}, ...newlist]);
    //     id++;
    // }
    // setList(search(inputText));
    // useEffect(() => {
    //     console.log("props.input: " + inputText);
    //     console.log("List: " + list);
    //      // Assuming search is a function that returns the list of results based on the input
    //     // Sort the list by score in descending order
    //     // const sortedList = [...list].sort((a, b) => b.score - a.score);
    //     // setList(sortedList);
    // }, []);

    return (
        <>
            <PageHeader />
            <ScrollView>
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