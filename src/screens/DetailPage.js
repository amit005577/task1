import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import rating from "../../assets/images/checkpng.png";
import DownIcon from "react-native-vector-icons/AntDesign";
import BathTub from "react-native-vector-icons/FontAwesome";
import Tools from "react-native-vector-icons/FontAwesome5";

const DetailPage = ({ route,navigation }) => {
  const data = route.params;
  console.log(data, "show data");
  const TitleData = [
    {
      id: 0,
      icon: "heater",
      color: "blue",
    },
    {
      id: 1,
      icon: "tools",
      color: "grey",
    },
    {
      id: 2,
      icon: "tub",
      color: "grey",
    },
    {
      id: 3,
      icon: "pool",
      color: "grey",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#176FF20D",
          marginLeft: 10,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: 90,
          borderRadius: 10,
          width: 90,
          marginTop: 20,
        }}
      >
        {item.icon == "heater" ? (
          <DownIcon name="wifi" size={30} color={'grey'} />
        ) : item.icon == "tools" ? (
          <Tools name="tools" size={30}color={'grey'} />
        ) : item.icon == "tub" ? (
          <Tools name="bath" size={30} color={'grey'}/>
        ) : item.icon == "pool" ? (
          <Tools name="swimming-pool" size={30}color={'grey'} />
        ) : null}
        <Text style={{ ...styles.titleStyle, color: item.color }}>
          {item.icon}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={data.image}
        borderRadius={20}
        style={{ width: "100%", height: 320 }}
      >
        <Pressable style={styles.iconstyle} onPress={()=>navigation.goBack()}>
          <Icon name="chevron-back" size={20} color={'black'} />
        </Pressable>
      </ImageBackground>
      <View style={styles.bgcolor}>
        <Icon name="heart" color={data.like ? "red" : "grey"} size={30} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textstyle}>{data.title}</Text>
        <Text style={{ ...styles.textstyle, fontSize: 12, color: "blue" }}>
          Show map
        </Text>
      </View>
      <View style={styles.startContainer}>
        <Image source={rating} style={{ height: 15, width: 15 }} />
        <Text style={{ ...styles.textstyle, fontSize: 12, marginLeft: 4 }}>
          {data.Rating}
        </Text>
        <Text style={{ ...styles.textstyle, fontSize: 12, color: "grey" }}>
          (355 Reviews){" "}
        </Text>
      </View>
      <Text style={{ ...styles.textstyle, fontSize: 12, marginTop: 10 }}>
        Aspen is as close as one can get to a storybook alpine town in America.
        The choose-your-own-adventure possibilities—skiing, hiking, dining
        shopping and ....
      </Text>
      <View style={{ ...styles.arrowDown }}>
        <Text
          style={{
            ...styles.textstyle,
            fontSize: 13,
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Reed more
        </Text>
        <DownIcon
          name="down"
          size={10}
          style={{ marginLeft: 10, color: "#176FF2" }}
        />
      </View>
      <Text
        style={{
          ...styles.textstyle,
          fontSize: 20,
          marginTop: 10,
          fontWeight: "500",
        }}
      >
        Facilities
      </Text>
      <View style={styles.flalistcontainer}>
        <FlatList
          data={TitleData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          alignContent:'center',alignItems:'center'
        }}
      >
        <View>
          <Text style={{...styles.textstyle,fontSize:12}}>Price</Text>
          <Text style={{...styles.textstyle,fontSize:20,color:'#2DD7A4'}}>$199</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "blue",
            width: "70%",
            height: 60,
            borderRadius: 20,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...styles.textstyle,
              fontSize: 18,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Book now
          </Text>
          <DownIcon
            name="arrowright"
            size={20}
            color={"#fff"}
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  iconstyle: {
    marginTop: 20,
    backgroundColor: "#ffff",
    width: 40,
    marginLeft: 10,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  bgcolor: {
    backgroundColor: "#F3F8FE",
    marginRight: 10,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    // marginTop: 5,
    borderRadius: 100,
    top: -20,
    right: 10,
    elevation: 4,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 23,
    color: "#000",
  },
  startContainer: {
    flexDirection: "row",
  },
  arrowDown: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  titleStyle: {
    // marginLeft: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
