import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import splashImage from "../../assets/images/mountain.webp";
const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        hidden
      />
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode={"stretch"}
          source={splashImage}
          style={styles.imageContainer}
        >
          <View style={styles.secondContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Plan your</Text>
              <Text
                style={{ ...styles.textStyle, fontSize: 39, fontWeight: "400" }}
              >
                Luxurious
              </Text>
              <Text
                style={{ ...styles.textStyle, fontSize: 39, fontWeight: "400" }}
              >
                Vocation
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}onPress={()=>navigation.navigate("home")} >
              <Text style={styles.btntext}>Explore</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // borderWidth:1,
    // borderColor:'red',
    justifyContent:'flex-end',
    
  },
  textContainer: {
    // justifyContent:'flex-end'
    // marginTop: "100%",
    // paddingHorizontal:20,
    // bottom:10
  },
  textStyle: {
    color: "#ffff",
    // marginTop: 5,
    fontSize: 22,
    fontWeight: "300",
  },
  secondContainer: {
    paddingHorizontal: 20,
    alignContent:'flex-end',
    bottom:20
    // marginTop:"0%"
  },
  btn: {
    height: 52,
    width: "100%",
    backgroundColor: "#176FF2",
    marginTop:10,
    borderRadius:10,justifyContent:'center',alignContent:'center',alignSelf:'center'
  },
  btntext: {
   alignSelf:'center',color:'#fff',fontSize:18
  },
});
