import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import TextInputUI from "@/components/TextInput";
import Checkbox from "expo-checkbox";
import UIPressable from "@/components/Button";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const ANNOUNCEMENTS_LIST = [
  {
    id: "1",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "2",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "3",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "4",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "5",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "6",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "7",
    img: require("../../assets/images/hor_list.png"),
  },
  {
    id: "8",
    img: require("../../assets/images/hor_list.png"),
  },
];

const POST_LIST = [
  {
    id: "1",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "2",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "3",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "4",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "5",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "6",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "7",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
  {
    id: "8",
    usrname: "alexjames",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more",
  },
];

export default function DetailsScreen() {
  const navigation = useNavigation();
  const [loginOption, setLoginOption] = useState(1);
  const [header, setHeader] = useState("Welcome Back..!");
  const [subHeader, setSubHeader] = useState(
    "Unlock Focused, Distraction-free Learning Login now"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 45,
          width: "90%",
          marginHorizontal: 20,
        }}
      >
        <MaterialCommunityIcons
          name="dots-horizontal-circle"
          size={24}
          color={"#fff"}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="bell-badge" size={24} color={"#fff"} />
          <MaterialIcons
            name="chat"
            size={24}
            color={"#fff"}
            style={{
              marginHorizontal: 10,
            }}
          />
          <FontAwesome name="bookmark" size={24} color={"#fff"} />
        </View>
      </View>
      <View style={styles.secBG} />
      <View style={styles.main}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#043142",
            marginVertical: 20,
            paddingHorizontal: 18,
          }}
        >
          Announcements
        </Text>
        <FlatList
          data={ANNOUNCEMENTS_LIST}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              source={item.img}
              style={{
                height: 50,
                width: 50,
                marginHorizontal: 5,
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#043142",
            marginVertical: 20,
            paddingHorizontal: 18,
          }}
        >
          Post
        </Text>
        <FlatList
          data={POST_LIST}
          renderItem={({ item }) => (
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: "#D9D9D9",
                      borderRadius: 50,
                      height: 30,
                      width: 30,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                      marginHorizontal: 10,
                    }}
                  >
                    {item.usrname}
                  </Text>
                </View>
                <SimpleLineIcons name="options-vertical" size={18} />
              </View>
              <View
                style={{
                  height: 175,
                  borderRadius: 10,
                  backgroundColor: "#D9D9D9",
                  marginVertical: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#043142",
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/images/verify.png")}
                    style={{ height: 20, width: 20 }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <SimpleLineIcons name="like" size={24} color={"#043142"} />
                  <MaterialCommunityIcons
                    name="message-reply-text-outline"
                    size={24}
                    color={"#043142"}
                    style={{ marginHorizontal: 10 }}
                  />
                  <Feather name="share-2" size={24} color={"#043142"} />
                </View>
                <Feather name="bookmark" size={24} />
              </View>
              <Text
                style={{ fontSize: 12, fontWeight: "400", marginVertical: 10 }}
              >
                {item.desc}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F5BE0026",
                    borderRadius: 7.5,
                    height: 30,
                    paddingHorizontal: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#043142",
                    }}
                  >
                    Design
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F5BE0026",
                    borderRadius: 7.5,
                    height: 30,
                    paddingHorizontal: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#043142",
                    }}
                  >
                    Persona
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F5BE0026",
                    borderRadius: 7.5,
                    height: 30,
                    paddingHorizontal: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#043142",
                    }}
                  >
                    User Flow
                  </Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5BE00",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  main: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: "15%",
    backgroundColor: "#fff",
    color: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  secBG: {
    position: "absolute",
    bottom: 0,
    right: 10,
    left: 10,
    top: "13%",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  loginOption: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 7.5,
  },
  loginOptionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  signBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: "48%",
    height: 40,
  },
});
