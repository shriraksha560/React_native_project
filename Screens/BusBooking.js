import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, DatePicker, Content } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class BusBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header span style={styles.headerStyle}>
          <Left>
            <Button transparent>
              <Icon name="fa-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Bus booking</Title>
          </Body>
          <Right />
        </Header>

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

            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "black", fontSize: 20, marginLeft: 50 }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.state.chosenDate.toString().substr(4, 12)}
              disabled={false}
            />


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
        <Text style={{ fontWeight: "bold", marginTop: 40, fontSize: 15, marginBottom: 0 }}>Bus offers</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.adImageStyle} source={require('../Assets/Images/bus.jpg')} />
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#1B1DAE", marginLeft: 90 }}>View all</Text>
            <Text style={{ color: "#1B1DAE" }}>  -></Text>

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