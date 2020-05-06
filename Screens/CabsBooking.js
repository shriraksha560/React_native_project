import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, DatePicker } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default class CabsBooking extends Component {
    render() {
        return (
            <Container>
                <Header hasSegment >
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Cabs booking</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                            
                        </Button>
                    </Right>
                </Header>
                <Segment>
                    <Button first>
                        <Text style={{ color: "white" }}>Outstation</Text>
                    </Button>
                    <Button>
                        <Text style={{ color: "white" }}>Airport Cabs</Text>
                    </Button>

                </Segment>
                <View style={styles.viewStyle}>
                    <View style={styles.rowConatiner}>
                        <View >
                            <Text style={styles.textHeadingStyle}>From</Text>
                            <Text style={styles.textResultStyle}>Bangalore</Text>
                        </View>
                        <Icon type="FontAwesome" name="fa-home" style={styles.toggleIconStyle} />
                        <View style={styles.toContainerStyle}>
                            <Text style={styles.textHeadingStyle}>To</Text>
                            <Text style={styles.textResultStyle}>Mangalore</Text>
                        </View>

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#E5EBEC',
                            borderBottomWidth: 1,
                            marginTop: 5
                        }}
                    />
                    <View>
                        <Text style={styles.textHeadingStyle}>Depart</Text>



                    </View>




                    <View
                        style={{
                            borderBottomColor: '#E5EBEC',
                            borderBottomWidth: 1,
                            marginTop: 5
                        }}
                    />

                    <View>
                        <Text style={styles.textHeadingStyle}>Travel preference</Text>
                        <View style={styles.rowConatiner}>
                            <Text style={styles.travelTextConatiner}>Icon</Text>
                            <Text style={styles.travelTextConatiner}>Icon </Text>
                            <Text style={styles.travelTextConatiner}>Icon</Text>
                            <Text style={styles.travelTextConatiner}>Icon</Text>



                        </View>

                        <View style={styles.rowConatiner}>
                            <Text style={styles.travelTextConatiner}>AC</Text>
                            <Text style={styles.travelTextConatiner}>NON AC</Text>
                            <Text style={styles.travelTextConatiner}>SLEEPER</Text>
                            <Text style={styles.travelTextConatiner}>SEATER</Text>



                        </View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.submitButton]}

                            onPress={() => navigation.navigate('Dashboard')}
                        >
                            <Text style={styles.submitStyle}>SUBMIT</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Container>
        );
    }
}



const styles = StyleSheet.create({

    containerStyle: { backgroundColor: "#CBD4D5" },
    viewStyle: {
        height: 300,
        //  width:"100%",
        backgroundColor: "white",
        borderRadius: 20,
        marginLeft: 6,
        marginRight: 6,

    },
    headerStyle: {
        backgroundColor: '#1B1DAE'
    },
    textHeadingStyle: {
        marginTop: 0,
        marginLeft: 10,
        marginTop: 10,
        color: "grey"
    },
    buttonContainer: {
        height: 45,
        marginLeft: 50,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //  marginBottom: 20,
        width: 230,
        borderRadius: 30,
    },
    textResultStyle: {
        marginTop: 4,
        marginLeft: 10,
        marginTop: 10,
        color: "black",
        fontSize: 20
    },
    rowConatiner: {
        flexDirection: 'row'
    },
    toggleIconStyle: {
        marginTop: 40,
        marginLeft: 60,
        height: 40,
        width: 40
    },
    submitButton: {
        backgroundColor: "#1B1DAE",
    },
    toContainerStyle: {
        marginLeft: 30
    },
    travelTextConatiner: {
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        fontSize: 15
    },
    submitStyle: {
        color: "white",
        fontWeight: "bold"
    },
    adImageStyle: {
        marginTop: 10,
        marginLeft: 5,
        height: 100,
        width: 150
    },
});