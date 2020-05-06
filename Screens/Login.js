import {
    View,
    Text,
    Button, ImageBackground, TextInput,
    Image, StyleSheet, TouchableHighlight
} from 'react-native';
import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        const navigation = this.props.navigation;


        return (

            <View style={styles.container} >
                <ImageBackground style={styles.backgroundImage} source={require('../Assets/Images/background2.jpg')} >

                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>
                            LOGIN
        </Text>
                        <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../Assets/Images/email.png')}  />

                            <TextInput style={styles.inputs}
                                placeholder="Email"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(email) => {
                                    return this.setState({ email });
                                }} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={require('../Assets/Images/password2.png')}  />
                            <TextInput style={styles.inputs}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>

                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}

                         onPress={() => navigation.navigate('Dashboard')}
                        >
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                            <Text style={styles.forgotStyles}>Forgot you're password?</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.registerStyles}>Register</Text>
                        </TouchableHighlight>

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
        opacity: 1.0
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
        marginBottom: 30,
        fontWeight: '600',
        color: 'white',
        fontWeight: "bold"
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 25,
        height: 25,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //  marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#1B1DAE",
    },
    loginText: {
        color: 'white',
        fontSize: 12,
        fontWeight: "bold"
    }, forgotStyles: {
        color: "white",
        marginLeft: 100,
        marginTop: 0,
        fontSize: 12
    },
    registerStyles: {
        color: "white",
        marginTop: 0,
        fontSize: 15,
        fontWeight: "bold"
    }

});