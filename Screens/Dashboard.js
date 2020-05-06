import React from 'react';
import { Text, View, Button, StyleSheet, StatusBar, ScrollView, Image, } from 'react-native';
import { Container, Header, Card, CardItem, Left, Right, Thumbnail, Body } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Dashboard extends React.Component {
    render() {
        return (
            <ScrollView>

                <View>


                    <Header style={styles.headerStyle}
                        leftComponent={{ icon: 'menu', color: 'white' }}
                        centerComponent={{ text: 'MakeMyTrip', style: { color: 'white' } }}
                        rightComponent={{ icon: 'home', color: 'white' }}
                    />               
                     <Text style={styles.adHeadingStyle}>What's new?</Text>
                    <ScrollView horizontal={true}>
                        <Image style={styles.adImageStyle} source={require('../Assets/Images/ad1.jpg')} />
                        <Image style={styles.adImageStyle} source={require('../Assets/Images/ad2.jpg')} />
                        <Image style={styles.adImageStyle} source={require('../Assets/Images/ad1.jpg')} />
                        <Image style={styles.adImageStyle} source={require('../Assets/Images/ad2.jpg')} />
                        <Image style={styles.adImageStyle} source={require('../Assets/Images/ad1.jpg')} />
                        <Image style={styles.adImageStyle} source={require('../Assets/Images/ad2.jpg')} />


                    </ScrollView>
                    <Text style={styles.adHeadingStyle}>Choose from  here</Text>

                    <View style={styles.containerStyle}>
                        <View style={styles.viewStyle} >
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>   BUS ICON</Text>

                                <Text style={styles.textStyle}>    Villas & Apts</Text>

                            </View>
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>  FLIGHT ICON</Text>

                                <Text style={styles.textStyle}>   Couple Hotels</Text>

                            </View>
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>  CAB ICON</Text>

                                <Text style={styles.textStyle}>      Bus</Text>

                            </View>
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>      CAB ICON</Text>

                                <Text style={styles.textStyle}>Airport Cabs</Text>
                            </View>




                        </View>


                        <View style={styles.viewStyle} >
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}> BUS ICON</Text>

                                <Text style={styles.textStyle}>  Hyd Metro</Text>
                            </View>

                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>   FLIGHT ICON</Text>

                                <Text style={styles.textStyle}>  Holidays</Text>

                            </View>

                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>    CAB ICON</Text>

                                <Text style={styles.textStyle}>   Activities</Text>
                            </View>
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>  CAB ICON</Text>

                                <Text style={styles.textStyle}>   Meals & Deals</Text>
                            </View>



                        </View>



                    </View>

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>Visited place</Text>
                                    <Text note>favourites</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fparis&psig=AOvVaw04ZJV8-bRNOG0wJ_K0yMw6&ust=1588666274265000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOij2JjhmekCFQAAAAAdAAAAABAH' }} style={{ height: 50, width: "100%", flex: 1 }} />
                        </CardItem>
                        {/* <CardItem>
<Left>
<Button transparent>
  <Icon active name="thumbs-up" />
  <Text>12 Likes</Text>
</Button>
</Left>
<Body>
<Button transparent>
  <Icon active name="chatbubbles" />
  <Text>4 Comments</Text>
</Button>
</Body>
<Right>
<Text>11h ago</Text>
</Right>
</CardItem> */}
                    </Card>

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>Visited place</Text>
                                    <Text note>favourites</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fparis&psig=AOvVaw04ZJV8-bRNOG0wJ_K0yMw6&ust=1588666274265000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOij2JjhmekCFQAAAAAdAAAAABAH' }} style={{ height: 50, width: "100%", flex: 1 }} />
                        </CardItem>
                        {/* <CardItem>
<Left>
<Button transparent>
  <Icon active name="thumbs-up" />
  <Text>12 Likes</Text>
</Button>
</Left>
<Body>
<Button transparent>
  <Icon active name="chatbubbles" />
  <Text>4 Comments</Text>
</Button>
</Body>
<Right>
<Text>11h ago</Text>
</Right>
</CardItem> */}
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#1B1DAE",


    },
    adImageStyle: {
        marginTop: 5,
        marginLeft: 5,
        height: 160,
        width: 200
    },
    adHeadingStyle: {
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    containerStyle: {
        backgroundColor: "#1B1DAE",
        height: 150,
        width: "100%",
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3
    },
    viewStyle: {
        flexDirection: "row",
        marginBottom: 30
    },
    viewStyleColumn: {
        flexDirection: "column"

    },
    textStyle: {
        fontSize: 15,
        color: "white"
    },
    iconStyle: {
        marginTop: 10,
        marginLeft: 20,
        height: 30, width: 40
    }
});