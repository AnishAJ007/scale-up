import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import TextInputUI from "@/components/TextInput";
import Checkbox from "expo-checkbox";
import UIPressable from "@/components/Button";

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
      <View style={styles.secBG} />
      <View style={styles.main}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Image
            source={require("./../assets/images/logo.png")}
            style={{ height: 75, width: 75 }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {header}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#999999",
          }}
        >
          {subHeader}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 15,
          }}
        >
          <Pressable
            style={{
              backgroundColor:
                loginOption == 1
                  ? Colors.light.primary
                  : Colors.light.background,
              ...styles.loginOption,
            }}
            onPress={() => {
              setLoginOption(1);
            }}
          >
            <Text
              style={{
                ...styles.loginOptionText,
                color:
                  loginOption == 1
                    ? Colors.light.background
                    : Colors.light.primary,
              }}
            >
              Username
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor:
                loginOption == 2
                  ? Colors.light.primary
                  : Colors.light.background,
              ...styles.loginOption,
            }}
            onPress={() => {
              setLoginOption(2);
            }}
          >
            <Text
              style={{
                ...styles.loginOptionText,
                color:
                  loginOption == 2
                    ? Colors.light.background
                    : Colors.light.primary,
              }}
            >
              Mobile No
            </Text>
          </Pressable>
        </View>

        {loginOption === 1 && (
          <View>
            <TextInputUI
              placeholder="Username/Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInputUI
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              isPassword
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Checkbox
                  style={{
                    margin: 8,
                    height: 18,
                    width: 18,
                  }}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={"999999"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#999999",
                  }}
                >
                  Remember Me
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#999999",
                  textDecorationLine: "underline",
                }}
              >
                Forgot Password?
              </Text>
            </View>
          </View>
        )}
        {loginOption === 2 && (
          <View>
            <TextInputUI
              placeholder="Mobile No"
              value={mobile}
              onChangeText={(value) => setMobile(value)}
            />
            {otpRequested ? (
              <>
                <TextInputUI
                  placeholder="OTP"
                  value={otp}
                  onChangeText={(value) => setOTP(value)}
                  isPassword
                />
                <View
                  style={{
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#999999",
                    }}
                  >
                    Didn’t receive OTP?
                    <Text
                      style={{
                        color: Colors.light.primary,
                        textDecorationLine: "underline",
                      }}
                    >
                      {" "}
                      Resend Code
                    </Text>
                  </Text>
                </View>
              </>
            ) : (
              <UIPressable
                title="Request OTP"
                onPress={() => {
                  setOtpRequested(true);
                }}
              />
            )}
          </View>
        )}
        {(loginOption === 1 || otpRequested) && (
          <UIPressable
            title="Login"
            onPress={() => {
              navigation.navigate("(tabs)");
              setOtpRequested(false);
            }}
          />
        )}
        <Text
          style={{
            color: "#043142",
            fontSize: 12,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Or continue with
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View style={styles.signBtn}>
            <Image
              source={require("./../assets/images/google_logo.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text
              style={{
                color: "#333333",
                fontSize: 12,
                fontWeight: "500",
                marginHorizontal: 5,
              }}
            >
              Google
            </Text>
          </View>
          <View style={styles.signBtn}>
            <Image
              source={require("./../assets/images/apple_logo.png")}
              style={{ height: 25, width: 25 }}
            />
            <Text
              style={{
                color: "#333333",
                fontSize: 12,
                fontWeight: "500",
                marginHorizontal: 5,
              }}
            >
              Apple
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#999999",
            textAlign: 'center',
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
          }}
        >
          Don’t have an account!
          <Text
            style={{
              color: Colors.light.primary,
            }}
          >
            {" "}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5BE00",
  },
  main: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: "10%",
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 18,
  },
  secBG: {
    position: "absolute",
    bottom: 0,
    right: 10,
    left: 10,
    top: "8%",
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
