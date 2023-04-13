import React from 'react';
import {Button, Text, View} from "react-native";

const ProfileScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};

export default ProfileScreen;