import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const RepositoryExtra = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>Stars</StyledText>
                <StyledText >{props.stargazersCount}</StyledText>
            </View>
            <View> 
                <StyledText align='center' fontWeight='bold'>Forks</StyledText>
                <StyledText >{props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Review</StyledText>
                <StyledText >{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Rating</StyledText>
                <StyledText >{props.ratingAverage}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryExtra;