import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home')
        }, 4000);
    },[]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./../../assets/logo_splash.png')}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height:200,
        width: 200
    }
});

export default SplashScreen;