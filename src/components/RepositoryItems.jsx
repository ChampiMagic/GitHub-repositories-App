import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryExtra from "./RepositoryExtra";
import theme from "./theme";

const RespositoryHeader = (props) => {
    return (
        <View style={{ flexDirection:'row', paddingBottom: 2 }}>
            <View>
              <Image style={styles.img} source={{ uri: props.picture }} />
            </View>
            <View style={{ flex: 1, paddingLeft: 10 }}>
                <StyledText style={{ marginBottom: 3 }} fontWeight='bold' color='primary'>Name: {props.name}</StyledText>
                <StyledText style={{ marginBottom: 3 }} >Age: {props.age}</StyledText>
                <StyledText style={styles.email}>{props.email}</StyledText>
            </View> 
        </View>
    )
}

const RepositoryItem = (props) => {
    return (
    <View key={props._id} style={styles.container}>
        <RespositoryHeader {...props}/>
        <RepositoryExtra {...props}/>
    </View>
    )
}

export default RepositoryItem;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    email: {
        marginBottom: 5,
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    img: {
    width: 48,
    height: 48,
    borderRadius: 4
    }
})