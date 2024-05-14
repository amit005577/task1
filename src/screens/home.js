import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import splashImage from "../../assets/images/mountain.webp";
import SplashScreen from "../components/splash";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Location from "react-native-vector-icons/Entypo";
import Search from "react-native-vector-icons/AntDesign";
import image1 from "../../assets/images/image2.jpeg";
import image2 from "../../assets/images/image12.webp";
import image3 from "../../assets/images/house3.jpeg";
import image4 from "../../assets/images/house4.jpeg";
import image5 from "../../assets/images/image11.jpeg";
import image6 from "../../assets/images/image12.webp";
import rating from "../../assets/images/checkpng.png";

const HomeScreen = ({navigation}) => {
  const TitleData = [
    {
      id: 0,
      title: "Location",
      color: "blue",
    },
    {
      id: 1,
      title: "Hotel",
      color: "grey",
    },
    {
      id: 2,
      title: "Food",
      color: "grey",
    },
    {
      id: 3,
      title: "Adventure",
      color: "grey",
    },
    {
      id: 4,
      title: "Something",
      color: "grey",
    },
    {
      id: 5,
      title: "Food",
      color: "grey",
    },
    {
      id: 6,
      title: "Adventure",
      color: "grey",
    },
    {
      id: 7,
      title: "Something",
      color: "grey",
    },
  ];
  const PopularData = [
    {
      id: 0,
      title: "Alley Palac",
      Rating: "4.1",
      like: true,
      image: image1,
    },
    {
      id: 1,
      title: "HotelAplac",
      Rating: "4.1",
      like: false,
      image: image2,
    },
    {
      id: 2,
      title: "Alley Palac",
      Rating: "4.1",
      like: false,
      image: image3,
    },
    {
      id: 3,
      title: "Adventure",
      Rating: "4.1",
      like: false,
      image: image4,
    },
    {
      id: 4,
      title: "Something",
      Rating: "4.1",
      like: false,
      image: image5,
    },
    {
      id: 5,
      title: "Something",
      Rating: "4.1",
      like: false,
      image: image5,
    },
    {
      id: 6,
      title: "Adventure",
      Rating: "4.1",
      like: false,
      image: image6,
    },
    {
      id: 7,
      title: "Something",
      Rating: "4.1",
      like: false,
      image: image5,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.titleContainer}>
        <Text style={{ ...styles.titleStyle, color: item.color }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const popularRenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('detail',item)} >
        <ImageBackground
          source={item.image}
          borderRadius={20}
          style={{ height: 230, width: 180, marginLeft: 20 }}
        >
          <View>
            <Text
              style={{
                ...styles.popularTextStyle,
                marginLeft: 10,
                width: "50%",
              }}
            >
              {item.title}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.ratingStyle}>
                <Image source={rating} style={{ height: 14, width: 14 }} />
                <Text style={{ ...styles.popularTextStyle, marginTop: -1 }}>
                  {item.Rating}
                </Text>
              </View>
              <View style={styles.bgcolor}>
                <Icon
                  name="heart"
                  color={item.like ? "red" : "grey"}
                  size={10}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const RecomededRenderItem = ({ item }) => {
    return (
      <View style={styles.imageTitleContainer}>
        <Image
          source={item.image}
          borderRadius={20}
          style={{ height: 100, width: 180 }}
        />
        <View
          style={{
            alignSelf: "flex-end",
            marginRight: 10,
            top: -10,
            backgroundColor: "grey",
            borderWidth: 2,
            borderColor: "#fff",
            fontSize: 8,
            color: "#fff",
            paddingHorizontal: 5,
            padding: 1,
            borderRadius: 10,
            alignItems: "center",
            
          }}
        >
          <Text
            style={{
              fontSize: 8,
              color: "#fff",
            }}
          >
            4N/5D
          </Text>
        </View>
       
       <Text style={{...styles.textstyle,marginLeft:10}} >{item.title}</Text>
      
      </View>
    );
  };
  return (
    <ScrollView style={styles.contaner}>
      <View style={styles.firstcontainer}>
        <View style={styles.secondContainer}>
          <Text style={styles.textstyle}>Explore</Text>
        </View>
        <View style={styles.subcontainer}>
          <Location name="location-pin" size={15} color={"#000000"} />
          <Text style={styles.textstyle}>Aspen,USA</Text>
          <Icon name="chevron-down" size={15} color={"#000000"} />
        </View>
      </View>
      <Text style={{ ...styles.textstyle, fontSize: 30 }}>Aspen</Text>
      <View style={styles.serchcontainer}>
        <Search name="search1" size={20} color={"#000000"} />
        <TextInput
          placeholder="Find things to do"
          style={{ marginLeft: 5, color: "#B8B8B8" }}
        />
      </View>
      <View style={styles.flalistcontainer}>
        <FlatList
          data={TitleData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.firstcontainer}>
        <Text style={{ ...styles.textstyle, fontSize: 18, fontWeight: "bold" }}>
          Popular
        </Text>
        <Text style={{ ...styles.textstyle, color: "blue", fontSize: 14 }}>
          See all
        </Text>
      </View>
      <View style={styles.flalistcontainer}>
        <FlatList
          data={PopularData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={popularRenderItem}
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.firstcontainer}>
        <Text style={{ ...styles.textstyle, fontSize: 18, fontWeight: "bold" }}>
          Recomended
        </Text>
      </View>
      <View style={styles.flalistcontainer}>
        <FlatList
          data={PopularData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={RecomededRenderItem}
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  firstcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    alignContent: "center",
    alignItems: "center",
  },
  secondContainer: {
    width: "60%",
  },
  textstyle: {
    color: "#000000",
  },
  serchcontainer: {
    // borderWidth: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#F3F8FE",
  },

  titleStyle: {
    marginLeft: 20,
    backgroundColor: "#176FF20D",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  flalistcontainer: {
    marginTop: 30,
  },
  imageTitleContainer: {
    height: 150,
    // borderWidth: 1,
    marginLeft: 10,
    borderRadius: 20,
    width: 180,
    backgroundColor:"#F3F8FE"
  },
  popularTextStyle: {
    marginTop: "95%",
    color: "#fff",
    paddingHorizontal: 10,
    backgroundColor: "#4D5652",
    borderRadius: 20,
  },
  ratingStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4D5652",
    justifyContent: "center",
    width: "35%",
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  bgcolor: {
    backgroundColor: "#fff",
    marginRight: 10,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 100,
  },
});
