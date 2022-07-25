import React from "react";
import { Text, View, FlatList, Button } from "react-native";
import RepositoryItem from "./RepositoryItems"
import useRepositories from "./hooks/repositories";


const RepositoryList = ({ navigation }) => {

    const {repositories} = useRepositories();
    
    return (
        <View style={{ flex: 1}}>
             <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />
            <FlatList
            data={repositories} 
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item: data }) => (
              <RepositoryItem {...data}/>
            )}
            />
        </View>
    )
}

export default RepositoryList;