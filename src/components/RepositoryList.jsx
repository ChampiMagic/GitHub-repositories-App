import React from "react";
import { Text, View, FlatList, Button } from "react-native";
import Data from "./data";
import RepositoryItem from "./RepositoryItems"

const RepositoryList = ({ navigation }) => {
    return (
        <View>
             <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />
            <FlatList
            data={Data} 
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item: data }) => (
              <RepositoryItem {...data}/>
            )}
            />
        </View>
    )
}

export default RepositoryList;