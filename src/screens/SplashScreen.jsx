
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logopencil.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.logoText}>Practivoo</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0047FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    logoText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
});
