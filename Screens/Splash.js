import {
    View,
    Text,
    Button, ImageBackground,
    Image, StyleSheet
} from 'react-native';
import React from 'react';

export default class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <ImageBackground style={styles.backgroundImage} source={require('../Assets/Images/background2.jpg')} >

                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>
                            MakeMyTrip
        </Text>
                        <Text style={styles.logoDescription}>
                            Take memories,leave footprints!!
        </Text>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 1.5
    },
    container: {
        flex: 1,
        fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        alignItems: "center",
    },
    logoText: {
        fontSize: 28,
        marginTop: 30,
        fontWeight: '600',
        color: 'black',
        fontWeight: "bold"
    },
    logoDescription: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
    }
});