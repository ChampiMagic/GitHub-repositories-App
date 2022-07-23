import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const RepositoryExtra = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>Company:</StyledText>
                <StyledText >{props.company}</StyledText>
            </View>
            <View> 
                <StyledText align='center' fontWeight='bold'>Gender:</StyledText>
                <StyledText >Gender: {props.gender}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Address:</StyledText>
                <StyledText >{props.address}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryExtra;